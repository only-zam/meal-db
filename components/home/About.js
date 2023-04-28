import React from 'react';
import Text from '../text/Text';
import Title from '../text/Title';
import classes from './About.module.scss';

function About() {
  return (
    <div className={classes.about}>
      <Title className={classes.title}>What is the Meal-DB</Title>
      <Text>
        Welcome to our website, the ultimate destination for chefs and food lovers alike! We are dedicated to providing an extensive database of recipes for all kinds of meals, from quick and easy weeknight dinners to elaborate holiday feasts. Our team of experienced chefs and food enthusiasts carefully curates each recipe to ensure that it is not only delicious but also accessible to cooks of all skill levels.
        <br />
        <br />
        Whether you're looking for classic comfort foods or adventurous international dishes, you'll find it all here on our website. So come on in, browse our recipe collection, and get ready to take your culinary skills to the next level!.…
      </Text>
    </div>
  );
}

export default About;