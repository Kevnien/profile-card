import SocialButton from "./social-button";

export interface ProfileCardProps {
  thumbnailSrc: string;
  name: string;
  title: string;
  bio: string;
  alt?: string;
}

export default function ProfileCard({
  thumbnailSrc,
  name,
  title,
  bio,
  alt = "profile picture",
}: ProfileCardProps) {
  const contactButtonText = "Contact me";
  const githubImageSrc = "/profile-card/github.svg";
  const linkedinImageSrc = "/profile-card/linkedin.svg";
  const instagramImageSrc = "/profile-card/instagram.svg";
  const xImageSrc = "/profile-card/x.svg";

  return (
    <div className="profile-card w-[340px] flex flex-col items-center gap-10 bg-white px-4 py-6 rounded-lg">
      <div className="details flex flex-col items-center gap-6 self-stretch">
        <img className="thumbnail w-16" src={thumbnailSrc} alt={alt} />
        <div className="name-title flex flex-col justify-center items-center gap-1 self-stretch">
          <h2 className="name font-medium text-xl text-center text-neutral-900">
            {name}
          </h2>
          <h3 className="title font-normal text-sm text-center text-neutral-600">
            {title}
          </h3>
        </div>
        <p className="bio font-normal text-base text-center text-neutral-600">
          {bio}
        </p>
      </div>
      <div className="actions flex flex-col gap-6 self-stretch">
        <button className="contactButton flex justify-center items-center gap-1.5 self-stretch bg-indigo-700 px-4 py-2.5 rounded font-medium text-base text-white shadow-[0px_1px_2px__0_rgba(0,0,0,0.06),_0px_1px_3px_0_rgba(0,0,0,0.10)] hover:bg-indigo-800 focus:bg-indigo-800 focus:shadow-[0px_0px_0px_4px_rgba(0.2666666805744171,0.2980392277240753,0.9058823585510254,0.12)]" tabIndex={0}>
          {contactButtonText}
        </button>
        <div className="socials flex justify-center gap-4 self-stretch">
          <SocialButton svgSrc={githubImageSrc} />
          <SocialButton svgSrc={linkedinImageSrc} />
          <SocialButton svgSrc={instagramImageSrc} />
          <SocialButton svgSrc={xImageSrc} />
        </div>
      </div>
    </div>
  );
}
