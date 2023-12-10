// This file encapulates server actions that will be used in client and server components as
// client components cannot define server actions
"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Adding formState for server action to return error
export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  try {
    // check user input and validate them
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 3) {
      return { message: "Title must be longer" };
    }
    if (typeof code !== "string" || code.length < 10) {
      return { message: "Code must be longer" };
    }

    // create record in database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: "Something went wrong... ",
      };
    }
  }
  revalidatePath("/") // reload cache on home page
  // redirect user back to home page
  // redirect needs to be outside of try catch
  // as next redirect actually throws a special error
  // which we do not need to handle in our catch
  redirect("/");
}

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`)
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  revalidatePath("/") // reload cache on home page
  redirect(`/`);
}
