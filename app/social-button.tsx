export default function SocialButton({svgSrc}: {svgSrc: string}) {
    return (
        <button className="github hover:bg-neutral-50 p-2 rounded focus:bg-neutral-50 focus:shadow-[0px_0px_0px_4px_rgba(0.2666666805744171,0.2980392277240753,0.9058823585510254,0.12)]" tabIndex={0}>
            <svg className="w-[16.666683197021484px] h-[16.255502700805664px] text-indigo-700">
              <image href={svgSrc}></image>
            </svg>
          </button>
    )
}