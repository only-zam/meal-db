import React from 'react';
import Image from 'next/image';
import classes from './Footer.module.scss';
import Logo from '../../images/meal_khuj_logo_primary.png';
import Text from '../text/Text';

function Footer() {
  return (
    <footer className={classes.footer}>
      <Image src={Logo} alt="meal-khuj logo" />
      <Text>
        Let the perfect
        recipe find you
      </Text>
      <Text className={classes.copyright}>
        © “Chef-db” 2023 All right reserved.
      </Text>
    </footer>
  );
}

export default Footer;