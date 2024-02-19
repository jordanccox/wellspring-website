/**
 * Testimonials data
 */

const testimonials = [
  {
    "text": "Amazing work done by Wellspring home services! Our kitchen is perfect.",
    "name": "Cody Niccoli"
  },
  {
    "text": "Very professional.  Nice friendly staff.  I would recommend Wellspring Home Services highly! A++++!!!!",
    "name": "Alan Skowron"
  },
  {
    "text": "Brett and his team completely reconstructed one bathroom shower. On another job they painted walls and trim. They are all GREAT to have in my home.",
    "name": "Terri Marone"
  },
  {
    "text": "We have been working with Brett and his team for many years (for personal and business projects). Highly recommended. Conscientious. Fair. Professional. Integrous. Trustworthy.",
    "name": "Jeff Bristol"
  },
  {
    "text": "I was referred to Wellspring Construction thru a family member. I called Brett as I needed a strong carport built. He quoted me a price. Him and his crew had my carport up on no time. They were polite, on time daily and was respectful to me and  my property. I had one small problem during a wind storm. Called Brett and told him what was going on. Within a short time the same day he had it fixed. I am very happy with my carport. He does great work.",
    "name": "Terri Boden"
  },
  {
    "text": "Wellspring renovated my house and replaced my kitchen.  That double oven is a blessing!  We had family over the day before Thanksgiving and baked all day.  9 people and we were able to bake without stepping on each other.",
    "name": "Sara Armstrong"
  },
  {
    "text": "Brett and Jordan were excellent to work with. Professional, clean, on time, helpful.  From the bringing of the painting experience I enjoyed working with them to the final product.  Thank you!",
    "name": "Joelle Benson"
  },
  {
    "text": "Our family couldn’t have been more pleased with Wellspring ! Not only do they do best quality work, they all have awesome attitudes! We had a budget and Brett worked to help our family stay within our financial limits. Zach, Jordan, and Brett finished work is above and beyond what we couldn’t ask and prayed for! We recommend Wellspring for honest and great quality work !",
    "name": "Laris Ryd"
  },
  {
    "text": "Brett and the crew were great. Not only did they do amazing work, they were so respectful of my wife and young children. I will absolutely work with them again.",
    "name": "Joshua Amundson"
  }
];

// Testimonials index
let currentIndex = 0;

/**
 * Ensures only numbers can be entered in phone number field in contact form
 * @param event - DOM Event 
 */
const formatPhoneNumber = (event) => {
  event.preventDefault();
  if (!isNaN(Number(event.key)) && event.target.value.length <= 9) {
    event.target.value += event.key;
  }

  if (event.key == "Backspace") {
    const regex = /[0-9]*/g;
    const match = event.target.value.match(regex);
    const oldValue = match.filter((char) => Number(char)).join("");
    const newValue = oldValue.slice(0, oldValue.length - 1);
    event.target.value = newValue;
  }

  if (event.target.value.length == 10) {
    const phoneNumber = event.target.value;
    document.querySelector("#phone").value = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`
  }
};

const redirectHome = () => {
  console.log("Thanks!");
};

/**
 * Loads more testimonials to the page -- 3 at a time
 */
const loadMoreTestimonials = () => {
  if (testimonials.length < currentIndex + 3) {
    return;
  }

  if (testimonials.length == currentIndex + 3) {
    document.querySelector("#load-more-testimonials").setAttribute("disabled", true);
  }

  currentIndex += 3;

  const nextTestimonialsGroup = [];

  for (let i = currentIndex - 3; i < currentIndex; i++) {
    nextTestimonialsGroup.push(`
    <div
    class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-auto"
    >
    <div class="p-5">
      <p class="mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-yellow-500 fill-yellow-500 inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-yellow-500 fill-yellow-500 inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-yellow-500 fill-yellow-500 inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-yellow-500 fill-yellow-500 inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-5 h-5 text-yellow-500 fill-yellow-500 inline-block"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
          />
        </svg>
      </p>
      <p class="mb-3 font-normal text-gray-800">
        ${testimonials[i].text}
      </p>
      <p class="italic">- ${testimonials[i].name}</p>
    </div>
  </div>
    `);
  }

  document.querySelector("#testimonials-section").insertAdjacentHTML("beforeend", nextTestimonialsGroup.join("\n"));
};

/** 
 * Get list of all images
 */
const allImages = (event) => {
  const gallery = document.querySelector("#gallery-images");

  const images = [];
  const divs = gallery.querySelectorAll('div img');
  for (const img of divs) {
    images.push(img.src.replace(/%20.*/, ""));
  }

  return images;
};

/**
 * Populate lightbox
 */
const populateLightbox = (imgSrc, prevAndNext) => {
  document.querySelector("#lightbox-image").replaceChildren();

  const template = `
  <img src="${imgSrc}" alt="" class="h-auto max-h-screen mx-auto" />
  <!-- Slider controls -->
     <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onclick="prevImage('${prevAndNext.prev}')"
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onclick="nextImage('${prevAndNext.next}')"
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button> 
  `;

  document.querySelector("#lightbox-image").insertAdjacentHTML("beforeend", template);
};

/**
 * Prev image
 */
const prevImage = (prev) => {
  if (prev == "null") {
    return;
  }

  const imgSrc = prev;

  const gallery = allImages();
  const newPrevAndNext = { prev: null, next: null };

  gallery.forEach((image, index, arr) => {
    if (image == imgSrc) {
      if (index > 0) {
        newPrevAndNext.prev = arr[index - 1];
      }
      if (index < arr.length - 1) {
        newPrevAndNext.next = arr[index + 1];
      }
    }
  });

  populateLightbox(imgSrc, newPrevAndNext);
};

/**
 * Next image
 */
const nextImage = (next) => {
  if (next == "null") {
    return;
  }

  const imgSrc = next;

  const gallery = allImages();
  const newPrevAndNext = { prev: null, next: null };

  gallery.forEach((image, index, arr) => {
    if (image == imgSrc) {
      if (index > 0) {
        newPrevAndNext.prev = arr[index - 1];
      }
      if (index < arr.length - 1) {
        newPrevAndNext.next = arr[index + 1];
      }
    }
  });

  populateLightbox(imgSrc, newPrevAndNext);
};

/**
 * Select image to display in lightbox
 */
const lightboxImage = (event) => {
  const imgSrc = event.target.src.replace(/%20.*/, "");
  
  const gallery = allImages();
  const prevAndNext = { prev: null, next: null };

  gallery.forEach((image, index, arr) => {
    if (image == imgSrc) {
      if (index > 0) {
        prevAndNext.prev = arr[index - 1];
      }
      if (index < arr.length - 1) {
        prevAndNext.next = arr[index + 1];
      }
    }
  });

  populateLightbox(imgSrc, prevAndNext);

  // document.querySelector("#lightbox-image").replaceChildren();

  // const template = `
  // <img src="${imgSrc}" alt="" class="h-auto max-h-screen mx-auto" />
  // <!-- Slider controls -->
  //    <button
  //         type="button"
  //         class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
  //         onclick="prevImage(${prevAndNext})"
  //       >
  //         <span
  //           class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-gray-800/70 group-focus:outline-none"
  //         >
  //           <svg
  //             class="w-4 h-4 text-white rtl:rotate-180"
  //             aria-hidden="true"
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 6 10"
  //           >
  //             <path
  //               stroke="currentColor"
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               stroke-width="2"
  //               d="M5 1 1 5l4 4"
  //             />
  //           </svg>
  //           <span class="sr-only">Previous</span>
  //         </span>
  //       </button>
  //       <button
  //         type="button"
  //         class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
  //       >
  //         <span
  //           class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:ring-gray-800/70 group-focus:outline-none"
  //         >
  //           <svg
  //             class="w-4 h-4 text-white rtl:rotate-180"
  //             aria-hidden="true"
  //             xmlns="http://www.w3.org/2000/svg"
  //             fill="none"
  //             viewBox="0 0 6 10"
  //           >
  //             <path
  //               stroke="currentColor"
  //               stroke-linecap="round"
  //               stroke-linejoin="round"
  //               stroke-width="2"
  //               d="m1 9 4-4-4-4"
  //             />
  //           </svg>
  //           <span class="sr-only">Next</span>
  //         </span>
  //       </button> 
  // `;

  // document.querySelector("#lightbox-image").insertAdjacentHTML("beforeend", template);
};