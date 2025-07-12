---
title: 'Easy Steps to Backup with Rclone on Google Drive'
date: '2024-08-07'
author: 'Cagatay Guley'
layout: post
permalink: /easy-steps-to-backup-with-rclone-on-google-drive/
redirect_from:
  - /easy-steps-to-backup-with-rclone-on-google-drive
categories: [web]
tags: [rclone, google drive, backup, cloudpanel, web, linux, windows, security]
image: backup.jpg
---

In this guide, we will walk you through the steps to back up your data to Google Drive using Rclone on a Windows operating system. This guide is suitable for both beginners and experienced users.

### Step 1: Download and Extract Rclone
First, download Rclone from [this link](https://rclone.org/downloads/). Extract the downloaded file to a specific location on your computer.

### Step 2: Run Command Prompt with Administrative Privileges
Search for CMD in the Start menu and run it as an administrator.

### Step 3: Navigate to the Rclone File Location
Change the directory to the location where you extracted Rclone:

```
cd #rclone_file_location
```

### Step 4: Note the Rclone Configuration File Location
Take note of the location of the Rclone configuration file:

```
C:\Users\user\AppData\Roaming\rclone\rclone.conf
```

### Step 5: Create a New Remote Connection
When prompted with “No remotes found, make a new one?”, type `n`:

```
No remotes found, make a new one? - n
```

### Step 6: Enter a Name for the New Remote
Type `drive` as the name for the new remote:

```
Enter name for new remote: drive
```

### Step 7: Specify Google Drive
Type `drive` when asked for the Google Drive number or type just number:

```
Storage> drive
```

### Step 8: Leave Client ID and Client Secret Empty
Leave these fields empty:

```
client_id>
client_secret>
```

### Step 9: Specify the Scope
Type `drive` or `1` for the scope:

```
scope> 1
```

### Step 10: Skip Advanced Configuration
When asked if you want to edit advanced config, type `n`:

```
y/n> n
```

### Step 11: Use Web Browser for Authentication
When prompted to use a web browser for authentication, type `y`:

```
y/n> y
```

### Step 12: Authenticate via Browser
Your browser will automatically navigate to a URL like this:

```
http://127.0.0.1:53682/auth?state=AbiF4_ck-Q-1x4ZBbQXag
```

Log in to your Google Drive account via the browser and accept rclone.

### Step 13: Locate the Rclone Configuration File
Go to the location of the Rclone configuration file:

```
C:\Users\user\AppData\Roaming\rclone\rclone.conf
```

### Step 14: Upload the Configuration File to Your Server
Copy the Rclone configuration file and upload it to your server via sFTP:

```
/root/.config/rclone
```

**Note:** Make sure to make hidden files visible on your sFTP client and on your PC.

### Conclusion

By following these steps, you can successfully set up and integrate Rclone with Google Drive. This process ensures that your data is securely backed up and can be restored when needed. For more information and support, visit the [Rclone documentation](https://rclone.org/install/) or [Cloudpanel documentation](https://www.cloudpanel.io/docs/v2/admin-area/backups/).
