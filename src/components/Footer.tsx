import Image from "next/image";

const Footer = () => {
	return (
		<footer className="bg-black text-white py-8">
			<div className="container mx-auto px-4">


				{/* Top section */}
				<div className="flex flex-wrap justify-between items-center mb-6 gap-6">
					<div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
						{/* <h1 className="text-2xl font-bold">Your Company</h1> */}
						<div className="w-full flex flex-col justify-center items-center">
							<Image
								src="https://cdn.prod.website-files.com/63e6c1e86653498b2e3849c1/64946fe2d67f626674957ef4_GL%20Logo.svg"
								alt="A descriptive alt text"
								width={200}
								height={300}
							/>
						</div>
						<p className="text-sm mt-2">Delivering results since 2012</p>
            
					</div>
          

					<div className="w-full md:w-auto text-center">
						{/* <ul className="flex justify-center space-x-4">
							<li>
								<a href="/" className="hover:text-gray-300">
									Home
								</a>
							</li>
							<li>
								<a href="/contact" className="hover:text-gray-300">
									Contact
								</a>
							</li>
						</ul> */}





            {/* Contact us section  */}

            <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">123 Your Street, Your City</p>
            <p className="text-sm">Email: info@yourcompany.com</p>
            <p className="text-sm">Phone: +123 456 7890</p>
          </div>
					</div>
          

				</div>

				{/* Bottom section */}
				<div className="text-center text-sm">
					<p>
						&copy; {new Date().getFullYear()} Your Company. All rights reserved.
					</p>
					<p className="mt-2">
						<a href="/privacy" className="hover:text-gray-300">
							Privacy Policy
						</a>{" "}
						|
						<a href="/terms" className="hover:text-gray-300">
							{" "}
							Terms of Service
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
