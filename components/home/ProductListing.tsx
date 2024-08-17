import Image from "next/image";
import Link from "next/link";
import { assetImages } from "constant/assets";

const ProductListing = () => {
	return (
		<div>
			<div className={`bg-white mx-auto w-full"}`}>
				<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-full lg:px-8">
					<h2 className="sr-only">Products</h2>

					<div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-6">
						{Array(50).fill(null).map((product, index) => (
										<Link
											href={`javascript:void(0)`}
											key={index}
											className="group">
											<div className="aspect-h-1 aspect-w-1 w-full  md:h-5/6 overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
												<Image
													width={500}
													height={400}
													src={assetImages.product}
													alt={""}
													className="h-full w-full object-cover object-center group-hover:opacity-75"
												/>
											</div>
											<h3 className="mt-4 text-sm text-gray-700">{`product-${index}`}</h3>
											<p className="mt-1 text-lg font-medium text-gray-900">₹{index * 10}</p>
										</Link>
									))
									.reverse()
							}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductListing;
