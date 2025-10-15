import { useId, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Search as SearchIcon } from 'lucide-react'

function AccordionSection({
  title,
  isOpen,
  onToggle,
  sectionId,
  children,
}) {
  return (
    <div className="border-t border-white/10">
      <button
        type="button"
        onClick={onToggle}
        className="w-full cursor-pointer flex items-center justify-between px-3 py-2 text-left font-medium text-gray-400 hover:text-gray-300"
        aria-expanded={isOpen}
        aria-controls={sectionId}
      >
        <span>{title}</span>
        <ChevronDownIcon
          className={`size-5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-400' : 'rotate-0'
            }`}
        />
      </button>

      {/* animated content */}
      <div
        id={sectionId}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        {children}
      </div>
    </div>
  )
}

const Controls = ({ onClick }) => {
  const [open, setOpen] = useState({
    navbars: false,
    heros: true,
  })

  const ids = {
    navbars: useId(),
    heros: useId(),
  }

  return (
    <div className="mt-4">
      {/* Navbars section */}
      <AccordionSection
        title="Navbars"
        isOpen={open.navbars}
        onToggle={() => setOpen((s) => ({ ...s, navbars: !s.navbars }))}
        sectionId={ids.navbars}
      >
        <div className="px-3 py-4 bg-[#131313]">
          <div className="grid grid-cols-3 gap-3">
            <div
              onClick={() => onClick("navbar.one")}
              className="text-gray-400 cursor-pointer flex justify-center items-center h-20 rounded-lg bg-white/5 ring-1 ring-white/10"
            >
              1
            </div>
            <div
              onClick={() => onClick("navbar.two")}
              className="text-gray-400 cursor-pointer flex justify-center items-center h-20 rounded-lg bg-white/5 ring-1 ring-white/10"
            >
              2
            </div>
            <div
              onClick={() => onClick("navbar.three")}
              className="text-gray-400 cursor-pointer flex justify-center items-center h-20 rounded-lg bg-white/5 ring-1 ring-white/10"
            >
              3
            </div>
          </div>
        </div>
      </AccordionSection>

      {/* Heros section */}
      <AccordionSection
        title="Heros"
        isOpen={open.heros}
        onToggle={() => setOpen((s) => ({ ...s, heros: !s.heros }))}
        sectionId={ids.heros}
      >
        <div className="grid grid-cols-3 gap-3 px-3 py-4 bg-[#131313]">
          <div
            onClick={() => onClick("hero.header.subheader.cta")}
            className="cursor-pointer"
          >
            <svg width="100%" height="100%" viewBox="0 0 120 80" fill="none">
              <rect x="8" y="8" width="104" height="64" rx="4" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <circle cx="16" cy="16" r="2" fill="rgba(255,255,255,0.2)" />
              <circle cx="24" cy="16" r="2" fill="rgba(255,255,255,0.2)" />
              <circle cx="32" cy="16" r="2" fill="rgba(255,255,255,0.2)" />
              <line x1="36" y1="36" x2="84" y2="36" stroke="rgba(129,140,248,0.6)" strokeWidth="3" strokeLinecap="round" />
              <line x1="42" y1="46" x2="78" y2="46" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
              <line x1="46" y1="52" x2="74" y2="52" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />
              <rect x="48" y="58" width="24" height="6" rx="3" fill="rgba(129,140,248,0.3)" stroke="rgba(129,140,248,0.5)" strokeWidth="1" />
            </svg>
          </div>

          <div
            onClick={() => onClick("hero.split.header.subheader.cta")}
            className="cursor-pointer"
          >
            <svg width="100%" height="100%" viewBox="0 0 120 80" fill="none">
              <rect x="8" y="8" width="104" height="64" rx="4" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <circle cx="16" cy="16" r="2" fill="rgba(255,255,255,0.2)" />
              <circle cx="24" cy="16" r="2" fill="rgba(255,255,255,0.2)" />
              <circle cx="32" cy="16" r="2" fill="rgba(255,255,255,0.2)" />
              <line x1="18" y1="34" x2="46" y2="34" stroke="rgba(129,140,248,0.6)" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="18" y1="42" x2="44" y2="42" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="18" y1="48" x2="40" y2="48" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" />
              <rect x="18" y="54" width="18" height="5" rx="2.5" fill="rgba(129,140,248,0.3)" stroke="rgba(129,140,248,0.5)" strokeWidth="1" />
              <rect x="64" y="30" width="38" height="34" rx="3" fill="rgba(129,140,248,0.1)" stroke="rgba(129,140,248,0.3)" strokeWidth="1.5" />
              <circle cx="83" cy="42" r="6" fill="rgba(129,140,248,0.2)" />
              <path d="M70 56 L76 50 L82 54 L88 48 L96 54" stroke="rgba(129,140,248,0.4)" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </div>
      </AccordionSection>
    </div>
  )
}

const Tabs = () => {
  const tabs = [
    { name: 'Sections', href: '#', current: true },
    { name: 'Design', href: '#', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:hidden">
        <select
          defaultValue={tabs.find((tab) => tab.current)?.name}
          aria-label="Select a tab"
          className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-2 pr-8 pl-3 text-base text-gray-100 outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
        <ChevronDownIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end fill-gray-400"
        />
      </div>

      <div className="hidden sm:block">
        <div className="border-b border-white/10 px-6">
          <nav aria-label="Tabs" className="-mb-px flex">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                className={classNames(
                  tab.current
                    ? 'border-indigo-400 text-indigo-400'
                    : 'border-transparent text-gray-400 hover:border-white/20 hover:text-gray-300',
                  'w-2/4 border-b-2 px-1 py-4 text-center text-sm font-medium',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

const Panel = ({ onAddNode }) => {
  return (
    <div
      className="w-[350px] h-full"
      style={{
        background: 'rgba(40, 40, 40, 0.95)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        borderRadius: 12,
      }}
    >
      <Tabs />

      <div className="mt-4 grid grid-cols-1 px-3">
        <input
          id="search"
          name="search"
          type="text"
          className="col-start-1 row-start-1 block w-full rounded-md bg-white/5 py-1.5 pr-3 pl-10 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:pl-9 sm:text-sm/6"
        />
        <SearchIcon
          aria-hidden="true"
          className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-500 sm:size-4"
        />
      </div>

      <Controls onClick={onAddNode}/>
    </div>
  )
}

export default Panel
