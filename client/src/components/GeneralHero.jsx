// import '../styles/generalHero.scss';

import Button from './Button';

const GeneralHero = ({
  image,
  alt,
  title,
  description,
  ctaText,
  listContent,
  parentClass,
  hideCta,
}) => {
  return (
    <section className={parentClass}>
      <div className={`${parentClass}__container`}>
        <div className={`${parentClass}__image-wrapper`}>
          <img src={image} alt={alt} className={`${parentClass}__image`} />
        </div>
        <div className={`${parentClass}__content`}>
          <h2 className={`${parentClass}__title`}>{title} </h2>
          <p className={`${parentClass}__text`}>{description}</p>
          <ul className={`${parentClass}__list`}>{listContent}</ul>
          {!hideCta && (
            // <button className={`${parentClass}__cta`}>{ctaText}</button>
            <Button
              path='/contact-us'
              text={ctaText}
              className={`${parentClass}__cta`}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default GeneralHero;
