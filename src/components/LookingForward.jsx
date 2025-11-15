import React from 'react';

const LookingForward = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-dark">
          We're Looking Forward to Meeting You!
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <img 
              src="https://via.placeholder.com/500x400" 
              alt="Happy pet parent"
              className="rounded-3xl shadow-xl w-full"
            />
          </div>

          <div className="space-y-6">
            <img 
              src="https://via.placeholder.com/500x400" 
              alt="Pet care"
              className="rounded-3xl shadow-xl w-full"
            />
            
            <div className="bg-secondary p-8 rounded-2xl space-y-4">
              <h3 className="text-2xl font-semibold text-dark">
                Ready to Give Your Pet the Best Care?
              </h3>
              <p className="text-gray-600">
                Join hundreds of happy pet parents who trust us with their furry family members. 
                Book your appointment today and experience the Fluffy Moms difference!
              </p>
              <button className="bg-primary text-dark px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition flex items-center space-x-2">
                <span>Contact Us</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LookingForward;