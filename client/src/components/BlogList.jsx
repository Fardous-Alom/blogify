import React from "react";

function BlogList() {
  return (
    <section classNameName="bg-white dark:bg-gray-900">
      <div classNameName="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div classNameName="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 classNameName="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Blog
          </h2>
          <p classNameName="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>

        {/* Cards */}
        <div classNameName="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <article classNameName="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              classNameName="rounded-t-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
              alt="office"
            />
            <div classNameName="p-5">
              <span classNameName="inline-block mb-2 text-xs font-medium text-purple-800 bg-purple-100 rounded px-2.5 py-0.5">
                Article
              </span>
              <h2 classNameName="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Our first office
              </h2>
              <p classNameName="mb-3 font-light text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
              <div classNameName="flex items-center space-x-3">
                <img
                  classNameName="w-8 h-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="author"
                />
                <div classNameName="text-sm">
                  <p classNameName="font-medium text-gray-900 dark:text-white">
                    Jese Leos
                  </p>
                  <p classNameName="text-gray-500 dark:text-gray-400">
                    Aug 15, 2021 · 16 min read
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article classNameName="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              classNameName="rounded-t-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-building.png"
              alt="google"
            />
            <div classNameName="p-5">
              <span classNameName="inline-block mb-2 text-xs font-medium text-purple-800 bg-purple-100 rounded px-2.5 py-0.5">
                Article
              </span>
              <h2 classNameName="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                We partnered up with Google
              </h2>
              <p classNameName="mb-3 font-light text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
              <div classNameName="flex items-center space-x-3">
                <img
                  classNameName="w-8 h-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="author"
                />
                <div classNameName="text-sm">
                  <p classNameName="font-medium text-gray-900 dark:text-white">
                    Roberta Casas
                  </p>
                  <p classNameName="text-gray-500 dark:text-gray-400">
                    Aug 15, 2021 · 16 min read
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article classNameName="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              classNameName="rounded-t-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/react-project.png"
              alt="react project"
            />
            <div classNameName="p-5">
              <span classNameName="inline-block mb-2 text-xs font-medium text-purple-800 bg-purple-100 rounded px-2.5 py-0.5">
                Article
              </span>
              <h2 classNameName="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Our first project with React
              </h2>
              <p classNameName="mb-3 font-light text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
              <div classNameName="flex items-center space-x-3">
                <img
                  classNameName="w-8 h-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                  alt="author"
                />
                <div classNameName="text-sm">
                  <p classNameName="font-medium text-gray-900 dark:text-white">
                    Sofia McGuire
                  </p>
                  <p classNameName="text-gray-500 dark:text-gray-400">
                    Aug 15, 2021 · 16 min read
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default BlogList;
