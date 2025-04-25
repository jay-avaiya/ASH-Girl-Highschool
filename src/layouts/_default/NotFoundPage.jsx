 
export default function NotFoundPage() {
     return (
          <>
               <div class="  h-screen flex bg-primary-500 dark:bg-secondary-500   items-center justify-center">
                    <div class="text-center">
                         <h1 class="text-9xl dark:text-primary-500 text-secondary-500  font-bold  ">404</h1>
                         <p class="text-2xl font-light text-secondary-500  dark:text-primary-500/70  mt-4">Oops! Page not found</p>
                         <p class=" dark:text-primary-500/60 text-secondary-500/50  mt-4 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
                         <a href="/" class="px-4 py-2  bg-red-200  text-white rounded hover:bg-blue-600 transition duration-150">
                              Go back to homepage
                         </a>
                    </div>
               </div>
          </>
     )
}
