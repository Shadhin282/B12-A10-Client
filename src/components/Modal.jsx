

const Modal = () => {
 


  return (
    <div class="bg-white rounded-xl shadow-lg p-6 md:p-8">
      {/* <!-- Property Image --> */}
      <div class="mb-6">
        <img 
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=400&fit=crop" 
          alt="Property" 
          class="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      <form class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* <!-- Left: Editable Fields --> */}
        <div class="lg:col-span-2 space-y-5">
          {/* <!-- Property Name --> */}
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Property Name</label>
            <input 
              type="text" 
              value="Modern Downtown Loft" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* <!-- Description --> */}
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea 
              rows="4" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition"
            >A beautifully designed loft in the heart of the city. Comes with stunning views, modern amenities, and close proximity to all major attractions. Perfect for professionals and couples.</textarea>
          </div>

          {/* <!-- Category & Price --> */}
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition">
                <option selected>Apartment</option>
                <option>House</option>
                <option>Villa</option>
                <option>Studio</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1">Price</label>
              <div class="relative">
                <span class="absolute left-3 top-2.5 text-gray-500 font-medium">$</span>
                <input 
                  type="text" 
                  value="2,500.00" 
                  class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>
          </div>

          {/* <!-- Location --> */}
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <div class="relative">
              <span class="absolute left-3 top-2.5 text-gray-500">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </span>
              <input 
                type="text" 
                value="123 Market St, San Francisco, CA 94103" 
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* <!-- Image Link --> */}
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Image Link</label>
            <div class="relative">
              <span class="absolute left-3 top-2.5 text-gray-500">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m4.899-4.898l1.102-1.102a4 4 0 015.656 5.656l-4 4a4 4 0 01-5.656-5.656z"/></svg>
              </span>
              <input 
                type="url" 
                value="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" 
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>
          </div>
        </div>

        {/* <!-- Right: Read-only User Info --> */}
        <div class="bg-gray-50 p-6 rounded-lg space-y-4">
          <h3 class="font-semibold text-gray-800 text-lg flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
            User Information
          </h3>

          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">User Name</label>
            <input 
              type="text" 
              value="Jane Doe" 
              readonly 
              class="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 cursor-not-allowed"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-600 mb-1">User Email</label>
            <div class="relative">
              <span class="absolute left-3 top-2.5 text-gray-500">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </span>
              <input 
                type="email" 
                value="jane.doe@example.com" 
                readonly 
                class="w-full pl-10 pr-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-700 cursor-not-allowed"
              />
            </div>
          </div>
        </div>
      </form>

      {/* <!-- Action Buttons --> */}
      <div class="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-200">
        <button class="px-6 py-2.5 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-medium transition">
          Cancel
        </button>
        <button class="px-7 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm hover:shadow transition">
          Save Changes
        </button>
      </div>
                            </div>
  );
};

export default Modal;