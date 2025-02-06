
import { TbMapPin } from "react-icons/tb";

export const Map = () => {
   return (
      <div className="text-center px-4 py-6">

         {/* Section Title */}
         <div className="flex items-center justify-center mb-6">
            <p className="text-lg font-semibold text-gray-800">Where we are</p>
            <div className="ml-2">
               <TbMapPin color='#1F4788' size="30px" />
            </div>
         </div>

         {/* Google Map iframe */}
         <div className="mb-6">
            <iframe
               src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d397561.9699856006!2d-94.46743177692916!3d38.879319640168895!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2str!4v1711663801522!5m2!1sen!2str"
               width="100%"
               height="400"
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               className="rounded-lg shadow-lg"
            />
         </div>

         {/* Location Details */}
         <div className="space-y-6">
            {/* City */}
            <div className="space-y-2">
               <h1 className="text-xl font-semibold text-gray-800">City:</h1>
               <h2 className="text-lg text-gray-600">None City</h2>
            </div>

            {/* Address */}
            <div className="space-y-2">
               <h1 className="text-xl font-semibold text-gray-800">Address:</h1>
               <h2 className="text-lg text-gray-600">
                  958 W. Main St.<br />
                  Suite 400<br />
                  Boise, ID 83702 USA.
               </h2>
            </div>
         </div>
      </div>
   );
};
