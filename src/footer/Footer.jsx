 import { AiFillLinkedin} from 'react-icons/ai';
 import {AiOutlineInstagram} from 'react-icons/ai';
 import {AiOutlineGithub} from 'react-icons/ai';
 import {FaDiscord} from 'react-icons/fa';
const Footer = () =>{
	return(
	<div>
	<h2><span>CONTACT US!</span></h2>
	<div className = "flex justify-center space-x-4   " >
	<a href = "https://www.linkedin.com/company/ieee-computer-society-vit-chennai/">< AiFillLinkedin size = '25px' className = "cursor-pointer"  /> </a>
	<a href = "https://www.instagram.com/comsoc.vitcc/"><AiOutlineInstagram size = '25px' className = "cursor-pointer" /></a>
	<a href = "https://github.com/computerSocietyVITC/"><AiOutlineGithub size = '25px' className = "cursor-pointer" /> </a>
	<a href = "https://discord.gg/6vkY3kcZnE"><FaDiscord size = '25px' className = "cursor-pointer" /></a>
	</div>
	<h3 className = "text-center pt-2">Powered by IEEE Computer Society, VIT Chennai</h3>
		</div>
	)
}

export default Footer;