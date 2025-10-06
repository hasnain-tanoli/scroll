import appwriteService from "../backend/config";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
        <div className="w-full h-48 overflow-hidden">
          <img
            src={appwriteService.getFileView(featuredImage)}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 line-clamp-2">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
