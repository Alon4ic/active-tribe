const accordionData = [
    {
        id: 'item-1',
        title: 'How do I sign up?',
        content: (
            <ul>
                <li key="sign-up-1" className="pb-2">
                    Download the App: Get the GymStation app from the App Store
                    or Google Play.
                </li>
                <li key="sign-up-2" className="pb-2">
                    Create an Account: Open the app and follow the prompts to
                    sign up using your email or social media account (you can
                    also Sign Up with Google or Apple account).
                </li>
                <li key="sign-up-3" className="pb-2">
                    Verify Your Information: Complete the registration process
                    by verifying your email or phone number.
                </li>
            </ul>
        ),
    },
    {
        id: 'item-2',
        title: 'How do I book GymStation?',
        content: (
            <ul>
                <li key="book-1" className="pb-2">
                    Log In: Open the GymStation app and log in to your account.
                </li>
                <li key="book-2" className="pb-2">
                    Find a GymStation: Browse available GymStation locations
                    near you.
                </li>
                <li key="book-3" className="pb-2">
                    Make a Reservation: Select your preferred GymStation and
                    book it for your desired time slot.
                </li>
                <li key="book-4" className="pb-2">
                    Confirm Booking: You'll receive a confirmation and
                    instructions on how to access the GymStation.
                </li>
            </ul>
        ),
    },
    {
        id: 'item-3',
        title: 'How do I unlock the GymStation?',
        content: [
            <ul>
                <li key="unlock-1" className="pb-2">
                    Get near the GymStation
                </li>
                <li key="unlock-2" className="pb-2">
                    Open the App: Go to the "My Bookings" section.
                </li>
                <li key="unlock-3" className="pb-2">
                    Select Your Booking: Choose the active booking you want to
                    access.
                </li>
                <li key="unlock-4" className="pb-2">
                    Unlock: Tap the unlock button in the app when you're near
                    the GymStation.
                </li>
            </ul>,
        ],
    },
    {
        id: 'item-4',
        title: 'Can\u2019t open the GymStation. What can I do?',
        content: [
            <ul>
                <li key="open-1" className="pb-2">
                    Check Your Booking: Ensure your booking is active and you're
                    at the correct GymStation.
                </li>
                <li key="open-2" className="pb-2">
                    Restart the App: Close and reopen the app, then try
                    unlocking again.
                </li>
                <li key="open-3" className="pb-2">
                    Contact Support: If issues persist, use the "Help" section
                    in the app or email us at support@activetribe.com for
                    assistance.
                </li>
            </ul>,
        ],
    },
    {
        id: 'item-5',
        title: 'Can\u2019t lock GymStation. What can I do?',
        content: [
            <ul>
                <li key="lock-1" className="pb-2">
                    Ensure Equipment is Returned: Make sure all equipment is
                    properly placed back in the locker.
                </li>
                <li key="lock-2" className="pb-2">
                    Retry the App: Try locking the GymStation again via the app.
                </li>
                <li key="lock-3" className="pb-2">
                    Contact Support: If you still can't lock it, contact our
                    support team through the app or at support@activetribe.com.
                </li>
            </ul>,
        ],
    },
    {
        id: 'item-6',
        title: 'Can I close GymStation while training?',
        content:
            'Yes, you can close the GymStation while training. Just make sure to keep the app handy to reopen it as needed during your session.',
    },
    {
        id: 'item-7',
        title: 'Some equipment is missing. What should I do?',
        content: [
            <ul>
                <li key="missing-1" className="pb-2">
                    Report Immediately: Use the app to report any missing
                    equipment as soon as you notice it.
                </li>
                <li key="missing-2" className="pb-2">
                    Provide Details: Include a description of the missing items
                    and any relevant photos.
                </li>
                <li key="missing-3" className="pb-2">
                    Await Confirmation: Our support team will review your report
                    and get back to you with the next steps. If equipment is
                    missing and not reported before you unlock the GymStation,
                    you will receive penalty points.
                </li>
            </ul>,
        ],
    },

    {
        id: 'item-8',
        title: 'Who is liable for theft and vandalism?',
        content:
            'Customers are responsible for the equipment during their booking period. If theft or vandalism occurs while the GymStation is unlocked under your booking and not reported, you may be held liable and receive penalty points.',
    },

    {
        id: 'item-9',
        title: 'What happens if I go overtime?',
        content: [
            <ul>
                <li key="happens-1" className="pb-2">
                    There are no extra charges if you go overtime, but you will
                    receive penalty points for exceeding your booked time slot.
                </li>
                <li key="happens-2" className="pb-2">
                    Please be considerate of other users and return the
                    GymStation on time.
                </li>
            </ul>,
        ],
    },
    {
        id: 'item-10',
        title: 'Can I use GymStation with friends? ',
        content:
            'Yes, you can use GymStation with friends, you can check the share GymStation option in the booking. However, every person using GymStation needs an Active Tribe account. After your training, always ensure all equipment is handled responsibly to avoid penalty points.',
    },
];

export default accordionData;
