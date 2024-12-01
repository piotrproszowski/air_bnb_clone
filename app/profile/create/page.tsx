import React from "react";

async function createProfileAction(formData: FormData) {
  "use server";
  const firstName = formData.get("firstName") as string;
  console.log(firstName);
}
async function CreateProfilePage() {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>new user</h1>
      <div className='border p-8 rounded-md max-w-lg'>
        <form action={createProfileAction}>
          <div className='mb-2'></div>
        </form>
      </div>
    </section>
  );
}

export default CreateProfilePage;
