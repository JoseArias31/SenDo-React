
**Assignment #2: SenDo Website Analysis**

Presenting SenDo: Your ultimate platform for document printing and delivery across Canada.

In addressing the requirements of this assignment, I have meticulously identified the distinct states and properties within my application.

To initiate the development process, I embarked on the concept of creating modular components. This approach not only enhances code organization but also assigns specific tasks to each component. From rudimentary elements such as forms and buttons to comprehensive pages incorporating images and text, my meticulously designed components include:

1. **EstimatePage**: Facilitates the user experience with a pop-up window, integrating the window.open method to introduce a user-friendly form.
2. **Home**: Serves as the inaugural landing page of the application, providing users with an introduction to its offerings.
3. **NavBar**: An infinitely reusable component that seamlessly integrates a navigation bar atop each page, ensuring consistent navigation.
4. **PrintAndSendForm**: A pivotal component housing the main form through which clients can generate comprehensive quotations tailored to their needs.
5. **Services**: The third page within the application, proficiently displays the full spectrum of services extended by the website.
6. **TrackForm**: A concise yet effective component that empowers clients to track their previously placed orders.

Beyond the confines of the component folder, I've curated pivotal .jsx files to orchestrate the application's functionality. For instance:

- **app.jsx**: Acts as a central hub for managing and routing activities throughout the application.
- **main.jsx**: Functions as a wrapper for app.jsx, incorporating the BrowserRouter attribute. This step ensures the seamless integration of React Router Dom, effectively unifying the application's internal components.

With an unswerving focus on readability, I've established three distinct folders encompassing components, images, and styles (CSS), fostering a structured environment for comprehension and subsequent updates.

States:

In the primary form, I've harnessed the power of "useState" as a cornerstone state-management tool. Initializing with an empty string ("") as the initial value, these constants dictate the state of the main form:

```jsx
const [shipperName, setShipperName] = useState('');
const [shipperPhone, setShipperPhone] = useState('');
const [recipientPhone, setRecipientPhone] = useState('');
const [recipientName, setRecipientName] = useState('');
const [recipientAddress, setRecipientAddress] = useState('');
```

Props:

Within the NavBar component, I've seamlessly integrated a prop known as "isHomePage" to dynamically modify the class name based on the component's context. This elegant solution simplifies the process of applying styles to components:

For the Home section:
```jsx
<NavBar isHomePage={true} />
```

For the PrintAndSendForm section:
```jsx
<NavBar isHomePage={false} />
```

By judiciously incorporating conditional rendering with `isHomePage`, I ensure the optimal presentation of components through class assignment:

```jsx
className={isHomePage ? styles.NavText : styles.NavText2}
```

In this pursuit, I've endeavored to create an intricate yet organized ecosystem, optimizing both functionality and aesthetics in the SenDo website.




