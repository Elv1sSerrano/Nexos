import { logoNexos, textLogoNexos } from '../../../assets/images';
import { menuPath } from "../../../constants/iconPaths"
import { navLinks } from '../constants';
import Icon from '../../../components/ui/Icon';

const Nav = () => {
  return (
    <header className='padding-x py-8 w-full absolute z-10 bg-purple-500'>
      <nav className='flex justify-between items-center max-container'>
        <div className="flex items-center gap-2">
          <a href="/"><img src={logoNexos} alt="Logo Nexos" width={50}/></a>
          <a href="/"><img src={textLogoNexos} alt="Logo Nexos" width={110}/></a>
        </div>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className='font-montserrat leading-normal text-lg text-white '>{link.label}</a>
            </li>
          ))}
        </ul>
        <div>          
          <Icon paths={menuPath} className={"hidden max-lg:block text-slate-gray"} />
        </div>
      </nav>
    </header>
  )
}
export default Nav