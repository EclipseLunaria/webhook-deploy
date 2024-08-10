import axios from "axios";

//post valid webhook
axios
  .post("http://localhost:4000/github/", {
    "ref": "refs/heads/main",
    "before": "7f36c608d2d3bffdfc5c60a48ef2b91780d046f7",
    "after": "6e7d9f8be22dfd6f82b1b0a1c8f0d6e3d5d4a93f",
    "repository": {
      "id": 123456789,
      "node_id": "MDEwOlJlcG9zaXRvcnkxMjM0NTY3ODk=",
      "name": "example-repo",
      "full_name": "username/example-repo",
      "owner": {
        "name": "username",
        "email": "user@example.com"
      },
      "private": false,
      "html_url": "https://github.com/username/example-repo",
      "description": "An example repository",
      "fork": false,
      "url": "https://api.github.com/repos/username/example-repo"
    },
    "pusher": {
      "name": "username",
      "email": "user@example.com"
    },
    "sender": {
      "login": "username",
      "id": 987654321,
      "node_id": "MDQ6VXNlcjk4NzY1NDMyMQ==",
      "avatar_url": "https://avatars.githubusercontent.com/u/987654321?v=4",
      "html_url": "https://github.com/username"
    },
    "created": false,
    "deleted": false,
    "forced": false,
    "commits": [
      {
        "id": "6e7d9f8be22dfd6f82b1b0a1c8f0d6e3d5d4a93f",
        "tree_id": "d1c1b4b1f9e2e3d6c8f0d6e3d5d4a93f6e7d9f8b",
        "distinct": true,
        "message": "Add new feature",
        "timestamp": "2024-08-10T12:34:56-07:00",
        "url": "https://github.com/username/example-repo/commit/6e7d9f8be22dfd6f82b1b0a1c8f0d6e3d5d4a93f",
        "author": {
          "name": "username",
          "email": "user@example.com"
        },
        "committer": {
          "name": "username",
          "email": "user@example.com"
        },
        "added": [
          "file1.txt"
        ],
        "removed": [],
        "modified": [
          "file2.txt"
        ]
      }
    ],
    "head_commit": {
      "id": "6e7d9f8be22dfd6f82b1b0a1c8f0d6e3d5d4a93f",
      "tree_id": "d1c1b4b1f9e2e3d6c8f0d6e3d5d4a93f6e7d9f8b",
      "distinct": true,
      "message": "Add new feature",
      "timestamp": "2024-08-10T12:34:56-07:00",
      "url": "https://github.com/username/example-repo/commit/6e7d9f8be22dfd6f82b1b0a1c8f0d6e3d5d4a93f",
      "author": {
        "name": "username",
        "email": "user@example.com"
      },
      "committer": {
        "name": "username",
        "email": "user@example.com"
      },
      "added": [
        "file1.txt"
      ],
      "removed": [],
      "modified": [
        "file2.txt"
      ]
    }
  }
  )
  .then((res) => {
    console.log(res.data);
  });
