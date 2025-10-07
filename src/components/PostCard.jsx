import appwriteService from "../backend/config";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`} className="group block">
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300 group-hover:-translate-y-1">
        <div className="w-full h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
          <img
            src={appwriteService.getFileView(featuredImage)}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h2>
          <div className="mt-3 flex items-center text-sm text-gray-500">
            <span>Read article</span>
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
