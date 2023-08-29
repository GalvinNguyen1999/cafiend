const Video = () => {
  return (
    <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]">
      <video playsInline autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6448aa4eef4ef804468a4158_pexels-kelly-2853794-3840x2160-24fps-transcode.mp4" />
        <source src="https://uploads-ssl.webflow.com/643cd69e8bc0bcf1b4af13d5/6448aa4eef4ef804468a4158_pexels-kelly-2853794-3840x2160-24fps-transcode.webm" />
      </video>
    </div>
  )
}

export default Video
