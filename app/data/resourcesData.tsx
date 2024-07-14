import { IResource } from "@/@types/resources.types";

export const resourcesData: IResource[] = [
  {
    id: 1,
    attributes: {
      title: "Test Resource",
      description: "This is a test resource.",
      createdAt: "2024-07-14T07:03:09.303Z",
      updatedAt: "2024-07-14T07:03:14.003Z",
      publishedAt: "2024-07-14T07:03:13.830Z",
      image: {
        data: {
          id: 1,
          attributes: {
            name: "avatar.png",
            alternativeText: null,
            caption: null,
            width: 480,
            height: 558,
            formats: {
              small: {
                ext: ".png",
                url: "https://res.cloudinary.com/dbyoitbuq/image/upload/v1720446935/small_avatar_e8b3928941.png",
                hash: "small_avatar_e8b3928941",
                mime: "image/png",
                name: "small_avatar.png",
                path: null,
                size: 329.23,
                width: 430,
                height: 500,
                sizeInBytes: 329226,
                provider_metadata: {
                  public_id: "small_avatar_e8b3928941",
                  resource_type: "image",
                },
              },
              thumbnail: {
                ext: ".png",
                url: "https://res.cloudinary.com/dbyoitbuq/image/upload/v1720446934/thumbnail_avatar_e8b3928941.png",
                hash: "thumbnail_avatar_e8b3928941",
                mime: "image/png",
                name: "thumbnail_avatar.png",
                path: null,
                size: 38.85,
                width: 134,
                height: 156,
                sizeInBytes: 38852,
                provider_metadata: {
                  public_id: "thumbnail_avatar_e8b3928941",
                  resource_type: "image",
                },
              },
            },
            hash: "avatar_e8b3928941",
            ext: ".png",
            mime: "image/png",
            size: 96.96,
            url: "https://res.cloudinary.com/dbyoitbuq/image/upload/v1720446935/avatar_e8b3928941.png",
            previewUrl: null,
            provider: "cloudinary",
            provider_metadata: {
              public_id: "avatar_e8b3928941",
              resource_type: "image",
            },
            createdAt: "2024-07-08T13:55:35.408Z",
            updatedAt: "2024-07-14T07:02:08.079Z",
          },
        },
      },
      resources: [
        {
          id: 2,
          description: "This is link to google.",
          link: "https://google.com",
        },
        {
          id: 1,
          description: "This is link to facebook.",
          link: "https://facebook.com",
        },
      ],
    },
  },
];
