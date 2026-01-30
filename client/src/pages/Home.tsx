import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Shield, Zap, Wind } from "lucide-react";

interface Product {
  name: string;
  retail_price: number;
  website_price: number;
  amazon_link: string;
  asin: string;
  image_url?: string;
  description?: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="font-bold text-xl text-blue-900">BROMIGUARD</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-gray-700 hover:text-blue-900 font-medium">
              Products
            </a>
            <a href="#why" className="text-gray-700 hover:text-blue-900 font-medium">
              Why Choose Us
            </a>
            <a href="#pro" className="text-gray-700 hover:text-blue-900 font-medium">
              For Professionals
            </a>
            <a href="#certifications" className="text-gray-700 hover:text-blue-900 font-medium">
              Certifications
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
                Premium Water Care for Spas & Hot Tubs
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                EPA-certified bromine tablets engineered for superior stability, comfort, and peace of mind. 98% active ingredients. No bleach odor.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="bg-blue-900 hover:bg-blue-800 text-white"
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Shop Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-900 text-blue-900 hover:bg-blue-50"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-8 h-96 flex items-center justify-center overflow-hidden">
              <img 
                src="/images/50lb-bucket.png" 
                alt="50LB Bromine Bucket"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Why BROMIGUARD?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "98% Active", desc: "Highest concentration of BCDMH" },
              { icon: Wind, title: "No Odor", desc: "Gentle on sensitive skin" },
              { icon: Shield, title: "EPA Certified", desc: "Meets strict safety standards" },
              { icon: Check, title: "Long-Lasting", desc: "5-7 day dissolution cycle" },
            ].map((feature, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition">
                <feature.icon className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg text-blue-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-4 text-center">Our Product Line</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            From 1 LB retail to 50 LB bulk—find the perfect size for your needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center overflow-hidden">
                  {product.image_url ? (
                    <img 
                      src={product.image_url} 
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="text-5xl">📦</div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-blue-900 mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-red-600">${product.website_price.toFixed(2)}</span>
                  </div>
                  <Button
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white"
                    onClick={() => window.open(product.amazon_link, "_blank")}
                  >
                    Buy on Amazon
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Engineered for Performance</h2>
              <ul className="space-y-4">
                {[
                  "Stable at high temperatures (95–104°F)",
                  "Works in wider pH range (7.0–8.4)",
                  "Bromamines retain disinfecting power",
                  "Eliminates harsh chlorine smell",
                  "Slow-dissolving for consistent results",
                  "Perfect for spas, hot tubs, and commercial pools",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">The Science</h3>
              <p className="mb-4">
                BROMIGUARD contains 98% BCDMH with 61% available bromine and 29% available chlorine.
              </p>
              <p className="mb-4">
                Unlike chlorine tablets that lose strength in hot water, bromine remains stable at high temperatures, ensuring your customers get consistent, reliable water care.
              </p>
              <p>
                EPA & NSF certified for safety and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pro Section */}
      <section id="pro" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">For Professionals</h2>
          <p className="text-center text-blue-100 mb-12 text-lg max-w-2xl mx-auto">
            Gyms, hotels, wellness centers, and commercial facilities trust BROMIGUARD for reliable, cost-effective water maintenance.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Bulk Pricing", desc: "50 LB buckets available for high-volume needs" },
              { title: "Consistent Supply", desc: "US-based warehouses ensure reliable delivery" },
              { title: "Professional Support", desc: "Dedicated support for facility managers" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/20">
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-blue-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Certifications & Standards</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* NSF Certification */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-2xl">NSF</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-1">NSF International</h3>
                  <p className="text-sm text-gray-600">Certificate #C0569000-01</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Complies with NSF/ANSI/CAN 60 standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Facility: Leache Chem Ltd., Hebei, China</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Authorized to bear NSF Mark</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Valid as long as products remain in NSF listing</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-6 pt-6 border-t border-gray-200">
                Certified: April 7, 2021
              </p>
            </div>

            {/* EPA Certification */}
            <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-700 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">EPA</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-1">EPA Registration</h3>
                  <p className="text-sm text-gray-600">Registration #94659-3</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Product: BROMIGUARD TABLETS</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Active Ingredient: 98% BCDMH</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>61% Available Bromine, 29% Available Chlorine</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span>Approved for pools, spas, and commercial facilities</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-6 pt-6 border-t border-gray-200">
                Certified: June 3, 2021
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 text-center">Why These Certifications Matter</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <h4 className="font-bold text-blue-900 mb-2">Safety Assured</h4>
                <p className="text-gray-700 text-sm">Both NSF and EPA certifications ensure our products meet strict safety and quality standards</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <h4 className="font-bold text-blue-900 mb-2">Performance Proven</h4>
                <p className="text-gray-700 text-sm">EPA registration confirms efficacy for water disinfection across multiple applications</p>
              </div>
              <div className="text-center">
                <Check className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <h4 className="font-bold text-blue-900 mb-2">Compliance Ready</h4>
                <p className="text-gray-700 text-sm">Meet regulatory requirements for commercial and residential water treatment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-white mb-4">BROMIGUARD</h3>
              <p className="text-sm">Premium water care solutions for spas, hot tubs, and commercial facilities.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#products" className="hover:text-white">All Products</a></li>
                <li><a href="#" className="hover:text-white">Retail Sizes</a></li>
                <li><a href="#" className="hover:text-white">Bulk Orders</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#certifications" className="hover:text-white">Certifications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Follow Us</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>&copy; 2026 BROMIGUARD. All rights reserved. | EPA Certified | NSF Approved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
