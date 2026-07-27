# Grid 1.2 QA Checklist

## Required automated checks

```bash
npm install
npm run lint
npm run build
```

## Core workflows

- Launch Grid and complete all three onboarding screens.
- Change the signal colour and confirm it remains after reload.
- Create an event with Quick Add and confirm it appears in Schedule.
- Open an event, edit it, mark it complete, reopen it, duplicate it and delete the duplicate.
- Switch between day, week and month views and swipe between days.
- Pull down from the top of Home, Schedule and Stats to refresh.
- Add a daily focus note and confirm it autosaves after a reload.
- Load each WOD template, add a library movement, reorder movements and save the WOD.
- Confirm the saved WOD appears on Home and in Schedule.
- Use every Grid Coach mode, reload and confirm the conversation persists.
- Export JSON, reset data, import the JSON and confirm records return.
- Restore default classes.

## Device and accessibility

- Check 320 px, 375 px, 390 px and 430 px widths.
- Check portrait and landscape with display cutout safe areas.
- Verify dark, light and system appearances.
- Verify 12-hour and 24-hour formats.
- Enable reduced motion and confirm transition animations calm down.
- Navigate interactive controls with a keyboard and verify visible focus rings.
- Install from Safari and confirm standalone launch, icon, startup image and offline reload.
