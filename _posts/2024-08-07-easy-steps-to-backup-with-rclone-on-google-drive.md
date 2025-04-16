---
id: 214
title: 'Easy Steps to Backup with Rclone on Google Drive'
date: '2024-08-07T15:45:53+00:00'
author: 'Cagatay Guley'
layout: post
guid: 'https://guley.com.tr/?p=214'
permalink: /easy-steps-to-backup-with-rclone-on-google-drive/
image: /wp-content/uploads/2024/08/rclone_back-1200x672.png
categories:
    - Web
tags:
    - 'Cloud Backup'
    - 'Data Backup'
    - 'Google Drive Backup'
    - Rclone
    - 'Rclone Configuration'
    - 'sFTP Usage'
    - 'Step-by-Step Guide'
    - 'Technology Guide'
    - 'Windows Backup'
---

<div class="ez-toc-v2_0_73 counter-hierarchy ez-toc-counter ez-toc-grey ez-toc-container-direction" id="ez-toc-container"><div class="ez-toc-title-container">Table of Contents

<span class="ez-toc-title-toggle">[<span class="ez-toc-js-icon-con"><span class=""><span class="eztoc-hide" style="display:none;">Toggle</span><span class="ez-toc-icon-toggle-span"><svg class="list-377408" fill="none" height="20px" style="fill: #999;color:#999" viewbox="0 0 24 24" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M6 6H4v2h2V6zm14 0H8v2h12V6zM4 11h2v2H4v-2zm16 0H8v2h12v-2zM4 16h2v2H4v-2zm16 0H8v2h12v-2z" fill="currentColor"></path></svg><svg baseprofile="tiny" class="arrow-unsorted-368013" height="10px" style="fill: #999;color:#999" version="1.2" viewbox="0 0 24 24" width="10px" xmlns="http://www.w3.org/2000/svg"><path d="M18.2 9.3l-6.2-6.3-6.2 6.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7zM5.8 14.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7s.1.5.3.7z"></path></svg></span></span></span>](#)</span></div><nav>- [Introduction](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Introduction "Introduction")
- [Step 1: Download and Extract Rclone](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Step_1_Download_and_Extract_Rclone "Step 1: Download and Extract Rclone")
- [Step 2: Run Command Prompt with Administrative Privileges](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Step_2_Run_Command_Prompt_with_Administrative_Privileges "Step 2: Run Command Prompt with Administrative Privileges")
- [Step 3: Navigate to the Rclone File Location](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Step_3_Navigate_to_the_Rclone_File_Location "Step 3: Navigate to the Rclone File Location")
- [Step 4: Note the Rclone Configuration File Location](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Step_4_Note_the_Rclone_Configuration_File_Location "Step 4: Note the Rclone Configuration File Location")
- [Step 5: Create a New Remote Connection](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Step_5_Create_a_New_Remote_Connection "Step 5: Create a New Remote Connection")
- [Step 6: Enter a Name for the New Remote](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Step_6_Enter_a_Name_for_the_New_Remote "Step 6: Enter a Name for the New Remote")
- [Step 7: Specify Google Drive](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Step_7_Specify_Google_Drive "Step 7: Specify Google Drive")
- [Step 8: Leave Client ID and Client Secret Empty](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Step_8_Leave_Client_ID_and_Client_Secret_Empty "Step 8: Leave Client ID and Client Secret Empty")
- [Step 9: Specify the Scope](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Step_9_Specify_the_Scope "Step 9: Specify the Scope")
- [Step 10: Skip Advanced Configuration](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Step_10_Skip_Advanced_Configuration "Step 10: Skip Advanced Configuration")
- [Step 11: Use Web Browser for Authentication](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Step_11_Use_Web_Browser_for_Authentication "Step 11: Use Web Browser for Authentication")
- [Step 12: Authenticate via Browser](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Step_12_Authenticate_via_Browser "Step 12: Authenticate via Browser")
- [Step 13: Locate the Rclone Configuration File](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Step_13_Locate_the_Rclone_Configuration_File "Step 13: Locate the Rclone Configuration File")
- [Step 14: Upload the Configuration File to Your Server](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Step_14_Upload_the_Configuration_File_to_Your_Server "Step 14: Upload the Configuration File to Your Server")
- [Conclusion](https://guley.com.tr/easy-steps-to-backup-with-rclone-on-google-drive/#Conclusion "Conclusion")

</nav></div>### <span class="ez-toc-section" id="Introduction"></span>Introduction<span class="ez-toc-section-end"></span>

In this guide, we will walk you through the steps to back up your data to Google Drive using Rclone on a Windows operating system. This guide is suitable for both beginners and experienced users.

### <span class="ez-toc-section" id="Step_1_Download_and_Extract_Rclone"></span>Step 1: Download and Extract Rclone<span class="ez-toc-section-end"></span>

First, download Rclone from [this link](https://rclone.org/downloads/). Extract the downloaded file to a specific location on your computer.

### <span class="ez-toc-section" id="Step_2_Run_Command_Prompt_with_Administrative_Privileges"></span>Step 2: Run Command Prompt with Administrative Privileges<span class="ez-toc-section-end"></span>

Search for CMD in the Start menu and run it as an administrator.

### <span class="ez-toc-section" id="Step_3_Navigate_to_the_Rclone_File_Location"></span>Step 3: Navigate to the Rclone File Location<span class="ez-toc-section-end"></span>

Change the directory to the location where you extracted Rclone:

```
cd #rclone_file_location
```

### <span class="ez-toc-section" id="Step_4_Note_the_Rclone_Configuration_File_Location"></span>Step 4: Note the Rclone Configuration File Location<span class="ez-toc-section-end"></span>

Take note of the location of the Rclone configuration file:

```
C:\Users\user\AppData\Roaming\rclone\rclone.conf
```

### <span class="ez-toc-section" id="Step_5_Create_a_New_Remote_Connection"></span>Step 5: Create a New Remote Connection<span class="ez-toc-section-end"></span>

When prompted with “No remotes found, make a new one?”, type `n`:

```
No remotes found, make a new one? - <strong>n</strong>
```

### <span class="ez-toc-section" id="Step_6_Enter_a_Name_for_the_New_Remote"></span>Step 6: Enter a Name for the New Remote<span class="ez-toc-section-end"></span>

Type `drive` as the name for the new remote:

```
Enter name for new remote: <strong>drive</strong>
```

### <span class="ez-toc-section" id="Step_7_Specify_Google_Drive"></span>Step 7: Specify Google Drive<span class="ez-toc-section-end"></span>

Type `drive` when asked for the Google Drive number or type just number:

```
```
Storage>
``` <strong>drive</strong>
```

### <span class="ez-toc-section" id="Step_8_Leave_Client_ID_and_Client_Secret_Empty"></span>Step 8: Leave Client ID and Client Secret Empty<span class="ez-toc-section-end"></span>

Leave these fields empty:

```
client_id><br></br>client_secret>
```

### <span class="ez-toc-section" id="Step_9_Specify_the_Scope"></span>Step 9: Specify the Scope<span class="ez-toc-section-end"></span>

Type `drive` or `1` for the scope:

```
scope> <strong>1</strong>
```

### <span class="ez-toc-section" id="Step_10_Skip_Advanced_Configuration"></span>Step 10: Skip Advanced Configuration<span class="ez-toc-section-end"></span>

When asked if you want to edit advanced config, type `n`:

```
y/n> <strong>n</strong>
```

### <span class="ez-toc-section" id="Step_11_Use_Web_Browser_for_Authentication"></span>Step 11: Use Web Browser for Authentication<span class="ez-toc-section-end"></span>

When prompted to use a web browser for authentication, type `y`:

```
y/n> <strong>y</strong>
```

### <span class="ez-toc-section" id="Step_12_Authenticate_via_Browser"></span>Step 12: Authenticate via Browser<span class="ez-toc-section-end"></span>

Your browser will automatically navigate to a URL like this:

```
http://127.0.0.1:53682/auth?state=AbiF4_ck-Q-1x4ZBbQXag
```

Log in to your Google Drive account via the browser and accept rclone.

### <span class="ez-toc-section" id="Step_13_Locate_the_Rclone_Configuration_File"></span>Step 13: Locate the Rclone Configuration File<span class="ez-toc-section-end"></span>

Go to the location of the Rclone configuration file:

```
C:\Users\user\AppData\Roaming\rclone\rclone.conf
```

### <span class="ez-toc-section" id="Step_14_Upload_the_Configuration_File_to_Your_Server"></span>Step 14: Upload the Configuration File to Your Server<span class="ez-toc-section-end"></span>

Copy the Rclone configuration file and upload it to your server via sFTP:

```
/root/.config/rclone
```

**Note:** Make sure to make hidden files visible on your sFTP client and on your PC.

### <span class="ez-toc-section" id="Conclusion"></span>Conclusion<span class="ez-toc-section-end"></span>

By following these steps, you can successfully set up and integrate Rclone with Google Drive. This process ensures that your data is securely backed up and can be restored when needed. For more information and support, visit the [Rclone documentation](https://rclone.org/install/) or [Cloudpanel documentation](https://www.cloudpanel.io/docs/v2/admin-area/backups/).