

export const VideosBox = () => {
   return (
      <div className="p-7 m-14 bg-slate-700 rounded-2xl">
         <section className="grid grid-cols-2 gap-4">
            <div className="relative">
               <div className=""></div>
               <video className="w-full rounded" src="videos/1.mp4" muted autoPlay loop></video>
            </div>
            <div className="relative">
               <div className=""></div>
               <video className="w-full rounded" src="videos/2.mp4" muted autoPlay loop></video>
            </div>
            <div className="relative">
               <div className=""></div>
               <video className="w-full rounded" src="videos/3.mp4" muted autoPlay loop></video>
            </div>
            <div className="relative">
               <div className=""></div>
               <video className="w-full rounded" src="videos/4.mp4" muted autoPlay loop></video>
            </div>
         </section>
      </div>
   );
};
