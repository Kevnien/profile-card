import Image from "next/image";

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
  return (
    <div className="profile-card w-[340px] flex flex-col items-center gap-10 bg-white px-4 py-6 rounded-lg">
      <div className="details flex flex-col items-center gap-6 self-stretch">
        <Image
          className="thumbnail"
          src={thumbnailSrc}
          alt={alt}
          height={64}
          width={64}
        />
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
      <div className="actions"></div>
    </div>
  );
}
