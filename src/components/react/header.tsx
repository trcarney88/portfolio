import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="text-primary font-bold font-corinthia text-4xl md:text-5xl"
          >
            <span className="sr-only">Personal Site for Todd Carney</span>
            Todd Carney
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm/6 font-semibold text-gray-300"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="text-primary font-bold font-corinthia text-4xl"
            >
              <span className="sr-only">Personal Site for Todd Carney</span>
              Todd Carney
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-300 hover:bg-primary"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

// <header className="absolute inset-x-0 top-0 z-50">
//   <nav
//     aria-label="Global"
//     className="mx-auto flex max-w-7xl items-center justify-between p-6"
//   >
//     <div className="flex lg:flex-1">
//       <a
//         href="/"
//         className="text-primary font-bold font-corinthia text-5xl"
//       >
//         <span className="sr-only">Personal Site for Todd Carney</span>
//         Todd Carney
//       </a>
//     </div>
//     <div className="flex lg:hidden">
//       <button
//         type="button"
//         onClick={() => setMobileMenuOpen(true)}
//         className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
//       >
//         <span className="sr-only">Open main menu</span>
//         <Bars3Icon aria-hidden="true" className="size-6" />
//       </button>
//     </div>
//     <div className="hidden lg:flex lg:gap-x-12">
//       {navigation.map((item) => (
//         <a
//           key={item.name}
//           href={item.href}
//           className="text-sm/6 font-semibold text-gray-300"
//         >
//           {item.name}
//         </a>
//       ))}
//     </div>
//   </nav>
//   <Dialog
//     open={mobileMenuOpen}
//     onClose={setMobileMenuOpen}
//     className="lg:hidden"
//   >
//     <div className="fixed inset-0 z-10" />
//     <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
//       <div className="flex items-center justify-between">
//         <a
//           href="/"
//           className="text-primary font-bold font-corinthia text-3xl"
//         >
//           <span className="sr-only">Personal Site for Todd Carney</span>
//           Home
//         </a>
//         <button
//           type="button"
//           onClick={() => setMobileMenuOpen(false)}
//           className="-m-2.5 rounded-md p-2.5 text-gray-400"
//         >
//           <span className="sr-only">Close menu</span>
//           <XMarkIcon aria-hidden="true" className="size-6" />
//         </button>
//       </div>
//       <div className="mt-6 flow-root">
//         <div className="-my-6 divide-y divide-gray-500/25">
//           <div className="space-y-2 py-6">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-300 hover:bg-gray-800"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </DialogPanel>
//   </Dialog>
// </header>
