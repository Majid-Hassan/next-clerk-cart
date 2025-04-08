# next-clerk-cart

![image](https://github.com/user-attachments/assets/edead89f-28d0-4019-af34-8f3b44b30328)

Next-Clerk Quick Cart is a fast and intuitive shopping experience built with Next.js. Upload and manage articles, set prices, and easily handle your cart and orders—all with secure user authentication.  

## Features  
- **User Authentication**: Secure login and registration using [Clerk](https://clerk.dev).  
- **Dynamic Product Upload**: Easily upload product images with descriptions and pricing details.  
- **Add to Cart Functionality**: Simple interaction to add items to the shopping cart.  
- **Quantity Selection**: Adjust the quantity of items directly on the booking page.  
- **Order Summary**: View a detailed summary of your booked items before finalizing.  
- **Address Management**: Input and save shipping addresses for a smoother checkout process.  
- **Responsive Design**: Beautifully styled components using **Tailwind CSS** for an optimal user experience.

## Installation  
To set up your local development environment, follow these steps:  

1. Clone the repository:  


   ```bash
    
   git clone https://github.com/Majid-Hassan/next-clerk-cart.git


2. Navigate to the project directory:

   ```bash
    
   cd next-clerk-cart
  
3. Install the dependencies:

   ```bash
    
   npm install
   #OR
   pnpm install

4. Set up your environment variables in a .env.local file:

   ```bash

   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_next_public_clerk_publish_key 
   CLERK_SECRET_KEY=your_clerk_secret_key  
   MONGODB_URI=your_mongodb_uri

   # inngest
     
   INNGEST_SIGNING_KEY=inngest_signin_key
   INNGEST_EVENT_KEY=inngest_event_key
   
   # Cloudinary

   CLOUDINARY_CLOUD_NAME=cloudinary_cloud_name
   CLOUDINARY_API_KEY=cloudinary_api_key
   CLOUDINARY_API_SECRET=cloudinary_api_secret

5. Start the development server:

   ```bash

   pnpm run dev
   #OR
   npm run dev

### **Usage**  

Briefly explain how to use the application and provide examples.  

    ```markdown

## Usage  
Once the application is running, visit `http://localhost:3000`. You can:  

- **Register/Login**: Use Clerk for secure authentication.  
- **Upload Products**: Add articles with images, names, prices, and descriptions.  
- **Add to Cart**: Navigate to the product page and add items to your cart.  
- **Book Now**: Enter the quantity required, provide your shipping address, and confirm your order.  

![Screenshot 2025-04-08 155653](https://github.com/user-attachments/assets/54a43a3e-cb44-4d33-9b63-3aa6bfc91b42)
![image](https://github.com/user-attachments/assets/eb6d5a16-f21e-4612-b735-388b94a74299)

## Tech Stack  
- **Next.js**: For building fast server-rendered applications.  
- **Clerk**: For secure user authentication and management.  
- **MongoDB**: NoSQL database for managing product and user information.  
- **Mongoose**: Elegant MongoDB object modeling for Node.js.  
- **Cloudinary**: For efficient image uploads and hosting.  
- **Tailwind CSS**: Framework for styling with utility-first CSS.

  ## Contributing  
Contributions are welcome! To contribute, please follow these steps:  

1. Fork the repository.  
2. Create a new branch:  
   ```bash
   
   git checkout -b feature/YourFeature
   
3. Commit your changes:
   
   ```bash
   
   git commit -m 'Add some feature'  
   
4. Push your branch:
   
   ```bash
   
   git push origin feature/YourFeature  
   
5. Create a new branch:
   
   ```bash
   
   git checkout -b feature/YourFeature
   


### **License**  
Specify the license under which the project is available.  

    ```markdown  
## License  
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.  

## Live Demo  
Try the live version of Next-Clerk Quick Cart [here]([https://yourapp.vercel.app](https://next-clerk-quick-cart.vercel.app/)).  

## FAQ  
**Q: How do I reset my password?**  
A: Use the password reset link provided in the login page.  

**Q: Can I suggest new features?**  
A: Absolutely! Just open an issue or a pull request with your suggestion.  

