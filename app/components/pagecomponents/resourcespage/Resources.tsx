/* eslint-disable @next/next/no-img-element */
"use client";
import { IResource } from "@/@types/resources.types";
import useFetch from "@/app/hooks/useFetch";
import { Select } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const { Option } = Select;

interface Resource {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  date: string; // Added date field for sorting
}

// Sample data with date field

const Resources = () => {
  // State for search term and sort order
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("latest");
  const [resourcesData, setResourcesData] = useState<IResource[]>([]);

  const { data } = useFetch("/resources?populate=image,resources", true);

  useEffect(() => {
    if (data) setResourcesData((data as any).data);
  }, [data]);

  //   const { user } = useUser();
  //   // Check if the user is a super admin
  //   const isSuperAdmin = user?.publicMetadata.role === "super_admin";

  //   // Ensure hooks are called unconditionally
  //   if (!isSuperAdmin) {
  //     return (
  //       <div className="p-4 text-center">
  //         <p className="text-red-500 font-bold">
  //           Access Denied: You do not have permission to view this page.
  //         </p>
  //       </div>
  //     );
  //   }

  // Filter resources based on search term
  const filteredResources = resourcesData.filter((resource) =>
    resource.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort resources based on sort order
  const sortedResources = filteredResources.sort((a, b) => {
    if (sortOrder === "latest") {
      return (
        new Date(b.attributes.updatedAt).getTime() -
        new Date(a.attributes.updatedAt).getTime()
      );
    } else {
      return (
        new Date(a.attributes.updatedAt).getTime() -
        new Date(b.attributes.updatedAt).getTime()
      );
    }
  });

  return (
    <section className="component-px component-py">
      <div className="ml-4 mb-4 flex justify-between items-center">
        <div className="relative w-full max-w-xl mb-4">
          <input
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 shadow-sm focus:outline-none "
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
        </div>
        <div className="mb-4">
          <Select
            defaultValue="latest"
            style={{ width: 160 }}
            onChange={(value) => setSortOrder(value)}
          >
            <Option value="latest">Sort by Latest</Option>
            <Option value="oldest">Sort by Oldest</Option>
          </Select>
        </div>
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
        {sortedResources.length === 0 ? (
          <p className=" text-gray-500">No resources found.</p>
        ) : (
          sortedResources.map((resource) => (
            <Link href={`/resources/${resource.id}`} key={resource.id}>
              <div className="border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition duration-300 relative">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={resource.attributes.image.data.attributes.url}
                    alt={resource.attributes.title}
                    className="w-full h-40 object-cover rounded"
                  />
                </div>
                <h2 className="text-lg font-medium mb-2">
                  {resource.attributes.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {resource.attributes.description}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default Resources;
