---
sidebar_position: 6
---

# Permissions

People Portals permissions work by **subteam**. You can configure access to Recruitment, Gitea, Apple.

![Subteams List View](/img/people-portal/Subteams.png) 

## Subteam Permissions

**Important: These permissions are strictly by subteam.** Enabling a permission for the "Engineering" subteam does not enable it for "Leadership" or any other subteam. This allows for fine-grained control over which parts of your project team have access to specific external resources.

To manage what the members of a subteam can do within your team (e.g. creating repos in Gitea, accessing AWS), click **Manage Subteams** from the Team Dashboard and select the subteam that you want to edit permissions for.

The toggles you see allow you to grant specific functional powers (like managing members or accessing AWS) for a particular subteam. 

After toggling the options to your liking, click **Save Changes**

### Combined Permissions
A user in multiple subteams always has **combined permissions**. Permissions are additive; users effectively hold the **highest power combination** of all permissions assigned to them across their subteams.

For example, if a user is granted "Manage Gitea Repos" in the Engineering subteam but not in Leadership, they will still have that permission available to them. Access is never "taken away" by being in a subteam with fewer permissions.

### Sync Shared Permissions

When you make changes to team members, these changes are not immediately applied to external services like Slack or Gitea. To apply your changes, click the **Sync Shared Permissions** button on the Team Dashboard.

![Sync Button](/img/people-portal/SyncButton.png)

This button triggers the People Portal to:
1.  Connect to all configured external services (e.g. Gitea, Slack, AWS).
2.  Update membership lists (adding new members, removing old ones) in those services.
3.  Apply the specific permission levels mandated by your subteam configuration.

**You must click this button whenever you add members** to ensure those changes take effect in your external tools.
