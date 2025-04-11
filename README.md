# Next-Clerk Quick Cart  

![Screenshot 2025-04-08 155653](https://github.com/user-attachments/assets/9c5b773e-9b24-4813-8635-ead074b461f2)

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
   
   git clone https://github.com/yourusername/next-clerk-quick-cart.git
   
2. Navigate to the project directory:
   
   ```bash
   
   cd next-clerk-quick-cart  
   
3. Install the dependencies:
   
   ```bash
   
   pnpm install
   #OR
   npm install  
   
4. Set up your environment variables in a .env file:
   
   ```bash
   NEXT_PUBLIC_CURRENCY=$
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_next_public_clerk_publish_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   MONGODB_URI=your_mongodb_uri
   INNGEST_SIGNING_KEY=inngest_signin_key
   INNGEST_EVENT_KEY=inngest_event_key
   CLOUDINARY_CLOUD_NAME=cloudinary_cloud_name
   CLOUDINARY_API_KEY=cloudinary_api_key
   CLOUDINARY_API_SECRET=cloudinary_api_secret
   
5. Start the development server:
   
   ```bash
   
   Pnpm run dev
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

![Screenshot 2025-04-08 155653](https://github.com/user-attachments/assets/621c1404-4c30-4d07-876e-b3135451f757)
![Screenshot 2025-04-08 161638](https://github.com/user-attachments/assets/d28e66d4-d370-4b28-85a5-38a4123d645e)
![Screenshot 2025-04-08 163433](https://github.com/user-attachments/assets/f492f543-77a8-41df-94b6-6d41cecec967)
![Screenshot 2025-04-08 163543](https://github.com/user-attachments/assets/a6c04745-381c-4a02-b38b-810ceead3ee5)
![Screenshot 2025-04-08 163508](https://github.com/user-attachments/assets/6a10915b-14f0-42e3-a8d3-ad5ae6679b76)
![Screenshot 2025-04-08 163604](https://github.com/user-attachments/assets/3ee630b7-5af1-41fd-beb4-613bc8d97133)
![Screenshot 2025-04-08 163633](https://github.com/user-attachments/assets/a447fadf-fa4f-496b-b5ca-bd302c2a3ee1)


## Tech Stack  
- **Next.js**: For building fast server-rendered applications.  
- **Clerk**: For secure user authentication and management.  
- **MongoDB**: NoSQL database for managing product and user information.  
- **Mongoose**: Elegant MongoDB object modeling for Node.js.  
- **Cloudinary**: For efficient image uploads and hosting.  
- **Tailwind CSS**: Framework for styling with utility-first CSS.


### 7. **License**  
Specify the license under which the project is available.  

    ```markdown  
## License  
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.  

## Live Demo  
Try the live version of Next-Clerk Quick Cart [here](https://next-clerk-quick-cart.vercel.app/).  

## FAQ  
**Q: How do I reset my password?**  
A: Use the password reset link provided in the login page.  

**Q: Can I suggest new features?**  
A: Absolutely! Just open an issue or a pull request with your suggestion.  

