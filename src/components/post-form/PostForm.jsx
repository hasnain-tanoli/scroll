import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../backend/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PostForm = ({ post }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
      if (file) appwriteService.deleteFile(post.featuredImage);

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) navigate(`/post/${dbPost.$id}`);
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);
      if (file) {
        data.featuredImage = file.$id;
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) navigate(`/post/${dbPost.$id}`);
      }
    }
  };

  const slugTransform = useCallback(
    (value) => {
      if (value && typeof value === "string") {
        const slug = value.trim().toLowerCase().replace(/\s+/g, "-");
        setValue("slug", slug);
        return slug;
      }
    },
    [setValue]
  );

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), {
          shouldValidate: true,
        });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl shadow-gray-300 p-10 my-16 flex flex-col lg:flex-row gap-10 transition-all duration-300"
    >
      <div className="w-full lg:w-2/3 flex flex-col gap-6">
        <Input
          label="Title"
          placeholder="Enter the post title"
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary outline-none text-gray-900"
          {...register("title", { required: true })}
        />

        <Input
          label="Slug"
          placeholder="Auto-generated or edit manually"
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary outline-none text-gray-900"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />

        <div>
          <RTE
            label="Content"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col gap-6">
        <div>
          <Input
            label="Featured Image"
            type="file"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-1 focus:ring-primary outline-none"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !post })}
          />
          {post && (
            <div className="mt-3">
              <img
                src={appwriteService.getFileView(post.featuredImage)}
                alt={post.title}
                className="w-full rounded-xl shadow-md"
              />
            </div>
          )}
        </div>

        <Select
          options={["active", "inactive"]}
          label="Status"
          className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-1 focus:ring-primary outline-none text-gray-900"
          {...register("status", { required: true })}
        />

        <Button
          type="submit"
          className={`w-full py-3 rounded-lg font-semibold text-white transition-all ${
            post
              ? "bg-green-600 hover:bg-green-700"
              : "bg-primary hover:bg-primary/90"
          }`}
        >
          {post ? "Update Post" : "Publish Post"}
        </Button>
      </div>
    </form>
  );
};

export default PostForm;
