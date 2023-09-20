import { useEffect, useRef } from 'react';
import './BrandModal.css'
import close from '../../icons/close.svg'

import { Brand } from '../../brands/brands';

type BrandModalProps = {
	onClose: () => void
} & Brand & React.HTMLAttributes<HTMLDivElement>;

export const BrandModal = ({icon, name, description, onClose, ...rest}: BrandModalProps) => {
	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
		  if (ref.current && !ref.current.contains(event.target as HTMLDivElement)) {
			onClose && onClose()
		  }
		};
		document.addEventListener('click', handleClickOutside, true);
		return () => {
		  document.removeEventListener('click', handleClickOutside, true);
		};
	  });

	const renderDescription = () => {
		const descriptionComponents: React.ReactNode[] = []
		description && description.map(line => {
			return descriptionComponents.push(<p className='brand_modal_description'>{line}</p>)
		})
		return descriptionComponents
	}
	return (
		<div className='brand_modal' {...rest} ref={ref}>
			<div className='brand_modal_content'>
				<button aria-label='Close brand modal' className='brand_modal_close' onClick={() => onClose()}>
					<img src={close} alt="Close brand modal" />
				</button>
				<img className='brand_modal_icon' src={icon} alt={name + " icon"} />
				<div>
					<h3 className='brand_modal_header'>Build internal tools with {name}</h3>
					<div className='brand_model_description_container'>{renderDescription()}</div>
				</div>
			</div>
		</div>
	)
}