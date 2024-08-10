// Interface for GitHub User
interface GitHubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
  }
  
  // Interface for GitHub Repository
  interface GitHubRepository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    owner: GitHubUser;
    private: boolean;
    html_url: string;
    description: string | null;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string | null;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string | null;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url: string | null;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: string | null;
    allow_forking: boolean;
    is_template: boolean;
    web_commit_signoff_required: boolean;
    topics: string[];
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
  }
  
  // Interface for GitHub Commit
  interface GitHubCommit {
    id: string;
    tree_id: string;
    distinct: boolean;
    message: string;
    timestamp: string;
    url: string;
    author: GitHubUser;
    committer: GitHubUser;
    added: string[];
    removed: string[];
    modified: string[];
  }
  
  // Interface for GitHub Push Event
  interface GitHubPushEvent {
    ref: string;
    before: string;
    after: string;
    repository: GitHubRepository;
    pusher: GitHubUser;
    sender: GitHubUser;
    created: boolean;
    deleted: boolean;
    forced: boolean;
    base_ref: string | null;
    compare: string;
    commits: GitHubCommit[];
    head_commit: GitHubCommit;
  }
  
  // Interface for GitHub Pull Request
  interface GitHubPullRequest {
    url: string;
    id: number;
    node_id: string;
    html_url: string;
    diff_url: string;
    patch_url: string;
    issue_url: string;
    number: number;
    state: string;
    locked: boolean;
    title: string;
    user: GitHubUser;
    body: string | null;
    created_at: string;
    updated_at: string;
    closed_at: string | null;
    merged_at: string | null;
    merge_commit_sha: string | null;
    assignee: GitHubUser | null;
    assignees: GitHubUser[];
    requested_reviewers: GitHubUser[];
    requested_teams: any[];
    labels: any[];
    milestone: any | null;
    draft: boolean;
    commits_url: string;
    review_comments_url: string;
    review_comment_url: string;
    comments_url: string;
    statuses_url: string;
    head: {
      label: string;
      ref: string;
      sha: string;
      user: GitHubUser;
      repo: GitHubRepository;
    };
    base: {
      label: string;
      ref: string;
      sha: string;
      user: GitHubUser;
      repo: GitHubRepository;
    };
    _links: any;
    author_association: string;
    auto_merge: any | null;
    active_lock_reason: any | null;
  }
  
  // Interface for GitHub Pull Request Event
  interface GitHubPullRequestEvent {
    action: string;
    number: number;
    pull_request: GitHubPullRequest;
    repository: GitHubRepository;
    sender: GitHubUser;
  }
  
  // Interface for handling different GitHub events
  interface GitHubWebhookEvent {
    push?: GitHubPushEvent;
    pull_request?: GitHubPullRequestEvent;
    // Add other event types as needed
  }
  
export {
    GitHubCommit,
    GitHubPullRequest, 
    GitHubPushEvent,
    GitHubPullRequestEvent,
    GitHubRepository,
    GitHubUser,
    GitHubWebhookEvent
}