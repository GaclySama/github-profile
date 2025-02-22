export const Header = () => {
  return (
    <picture className="background-container">
      <source
        media="(max-width: 600px)"
        srcSet="hero-image-github-profile-sm.jpg"
      />

      <img
        className="image-background"
        src="hero-image-github-profile.jpg"
        alt="header image"
      />
    </picture>
  );
};
