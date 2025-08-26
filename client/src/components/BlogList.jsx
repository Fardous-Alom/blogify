import React from "react";

function BlogList() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Blog
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/office-laptops.png"
              alt="office"
            />
            <div className="p-5">
              <span className="inline-block mb-2 text-xs font-medium text-purple-800 bg-purple-100 rounded px-2.5 py-0.5">
                Article
              </span>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Our first office
              </h2>
              <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
              <div className="flex items-center space-x-3">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                  alt="author"
                />
                <div className="text-sm">
                  <p className="font-medium text-gray-900 dark:text-white">
                    Jese Leos
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Aug 15, 2021 · 16 min read
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2 */}
          <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/google-building.png"
              alt="google"
            />
            <div className="p-5">
              <span className="inline-block mb-2 text-xs font-medium text-purple-800 bg-purple-100 rounded px-2.5 py-0.5">
                Article
              </span>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                We partnered up with Google
              </h2>
              <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
              <div className="flex items-center space-x-3">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="author"
                />
                <div className="text-sm">
                  <p className="font-medium text-gray-900 dark:text-white">
                    Roberta Casas
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Aug 15, 2021 · 16 min read
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Card 3 */}
          <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img
              className="rounded-t-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/blog/react-project.png"
              alt="react project"
            />
            <div className="p-5">
              <span className="inline-block mb-2 text-xs font-medium text-purple-800 bg-purple-100 rounded px-2.5 py-0.5">
                Article
              </span>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Our first project with React
              </h2>
              <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
                Over the past year, Volosoft has undergone many changes! After
                months of preparation and some hard work, we moved to our new
                office.
              </p>
              <div className="flex items-center space-x-3">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
                  alt="author"
                />
                <div className="text-sm">
                  <p className="font-medium text-gray-900 dark:text-white">
                    Sofia McGuire
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
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
