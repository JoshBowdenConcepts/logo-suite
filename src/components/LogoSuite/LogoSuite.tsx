import { useState, useCallback } from "react";
import "./LogoSuite.css";
import { brands, Brand } from "../../brands/brands";
import { Pill } from "../Pill/Pill";
import { BrandModal } from "../BrandModal/BrandModal";
import { shuffle } from "../../helpers/shuffle";
import { getRandomInteger } from "../../helpers/getRandomInt";

import Marquee from "react-fast-marquee";

type LogoSuiteProps = {
  repeatingLines?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const LogoSuite = ({ repeatingLines = 0, ...rest }: LogoSuiteProps) => {
	const [modalObject, setModalObject] = useState<Brand | null>();

	const handlePillClick = (brand: Brand | null) => {
		setModalObject(brand)
	}

	const renderRepeatingLines = useCallback((): React.ReactNode => {
		const renderBrands = (brands: Brand[]): React.ReactNode =>
		brands.map((brand) => {
		  const { name, icon } = brand;
		  return <Pill key={name} name={name} icon={icon} onClick={() => handlePillClick(brand)} />;
		});

		return [...Array(repeatingLines).keys()].map((i) => {
			const shuffledBrands = shuffle(brands);
			return (
			  <div
				key={i}
				className="logo_suite_line"
			  >
				<Marquee pauseOnHover speed={getRandomInteger(22, 40)}>{renderBrands(shuffledBrands)}
				{renderBrands(shuffledBrands)}</Marquee>
			  </div>
			);
		  })
	  }, [repeatingLines]);

  return (
    <div className="logo_suite_container" {...rest}>
      {renderRepeatingLines()}
	  {modalObject && <BrandModal onClose={() => handlePillClick(null)} {...modalObject} />}
    </div>
  );
};
