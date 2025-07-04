# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## 0.7.1 - 2025-07-04

### Added
* UI redesign, including a 3-pane layout on wide screens for live-previewing Markdown
* GitHub Markdown-flavoured checkboxes
* Experimental snippet sharing functionality

### Changed
* Document Header now supports full Markdown

### Fixed
* Tab support in Macro (JavaScript) editor

## 0.6.1 - 2024-12-06

### Added
* Markdown and mark-related keyboard shortcuts to snippet form note and text areas

### Changed
* Saving a snippet as a draft will close the form instead of allowing to add more snippets
* Add icons to library content create menu

### Fixed
* Make sure Markdown links always open in a new tab
* Better form error feedback on text create or update
* Prevent the create folder menu option from disappearing
* Ensure trigger auto-generation from title on paste
* Ensure a macro update can be confirmed
* Improve feedback that inbox items can only be dragged into custom folders
* Notify context tab(s) need to be reloaded in order to connect with them

## 0.5.9 - 2024-11-25

### Changed
* Export with application reset now requires a toggle

### Fixed
* Revert Text mark popup positioning

## 0.5.8 - 2024-11-25

### Changed
* Limit markdown syntax in the header to headers, bold, italics and horizontal rule

### Fixed
* Prevent default text selection in editor to be overwritten by internal state
* Position Text mark popup list in order for it not to be hidden when tabbing
* Composer editor keyboard shortcuts

## 0.5.7 - 2024-11-20

### Added
* Show progress indicator when getting started
* Show transpilation wait time to check time needed
* Show a warning on snippet edit form when the snippet has dependents

### Changed
* The extension toolbar icon will open the dashboard when no context is specified

### Fixed
* Clearer icons on information banners
* Context edit flow and feedback
* Snippet draft indication and interaction
* Snippet text preview with marked placeholders
* Prevent duplicated errors regarding the use of just-in-time scripts inside snippets

## 0.4.6 - 2024-11-17

### Fixed
* Show an error when a snippet uses a macro that runs on trigger. This is currently not supported.
* Prevent library from losing transpiled state after toggling it back into view

## 0.4.5 - 2024-11-17

### Fixed
* Remove duplicate warning when deleting snippets that are dependencies
* Loading time of large snippet libraries
* Better (but not optimal) feedback when importing invalid data

## 0.4.4 - 2024-11-14

### Added
* dialog to view available shortcuts and change light/dark mode
* library change detection and notifications
* transpilation telemetry in the footer
* snippet variants preview in markdown
* save a single snippet is now the default, with an option to add more texts

### Fixed
* observable subscription
* snippet reordering lost track of snippet identity when triggered
* visually disable snippet form submission when errors or snippets text changes need attention
* data-binding subscription leakage
* window keyboard event binding to this

## 0.2.2 - 2024-09-13

### Added
* Application reset to clear all data and be able to start fresh or stop using the app altogether.
* Document browser to view, open and delete documents
* Built-in context for Outlook, Gmail, GitHub and Stackoverflow
* Shortcuts Meta + N to create a new document and Meta + Alt + N to create a new document with connected context

### Changed
* Redesigned interface

### Removed
* HTML support in header. Use Markdown instead.

### Fixed
* Maintain folder order when exporting (and back importing)

## 0.1.1 - 2024-05-16

### Fixed
* Prevent reordering of snippets in the inbox when they get updated
* Create a snippet directly in a folder
