import Image from "next/image"
type ButtonProps = {
     type: 'button' | 'submit';
     title: string;
     icon?: string;
     variant: 'btn_blue' | 'btn_blue_secondary' | 'btn_white_text';
}

const Button = ({type, title, icon, variant}: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${variant}`}>
     {icon && <Image src={icon} alt={title} width={24}height={24}/>}
     <label className="bold-12 whitespace-nowrap">{title}</label>
    </button>
  )
}

export default Button