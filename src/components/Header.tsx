export const Header = () => {
  return (
    <picture className="background-container">
      <source
        media="(max-width: 600px)"
        srcSet="src\assets\hero-image-github-profile-sm.jpg"
      />

      <img
        className="image-background"
        src="src\assets\hero-image-github-profile.jpg"
        alt="header image"
      />
    </picture>
  );
};
