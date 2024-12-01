import React from 'react';

const Documentation = () => {
  return (
    <div className="documentation">
      <h1>Documentation</h1>
      <p>
        Xdraw is a web-based drawing application that mimics freehand drawings, ideal for informal brainstorming and wireframing. It includes real-time collaboration, versatile tools, an intuitive interface, and various export options. Xdraw is built using React and can be integrated into web apps via its library, @excalidraw/excalidraw. It is lightweight, modular, and developer-friendly, making it easy to incorporate into larger systems or adapt for custom projects.
      </p>
      <h2>Key Features</h2>
      <ul>
        <li>Hand-Drawn Look: Xdraw’s unique style mimics freehand drawings, which is ideal for informal brainstorming and wireframing.</li>
        <li>Real-Time Collaboration: Multiple users can edit the same canvas simultaneously, making it effective for teamwork and remote collaborations.</li>
        <li>Versatile Tools: Includes shapes, text, connectors, and freehand drawing for creating diverse visual elements.</li>
        <li>Intuitive Interface: A simple UI helps users focus on creativity without learning complex tools.</li>
        <li>Web-Based Accessibility: Works directly in a browser, eliminating the need for downloads or installations.</li>
        <li>Open-Source Flexibility: Developers can customize and extend its functionality to suit specific requirements.</li>
        <li>No Login Required: Users can start creating without creating accounts, lowering entry barriers.</li>
        <li>Export Options: Users can export drawings as PNG, SVG, or shareable links for easy integration into other projects.</li>
      </ul>
      <h2>Technology and Integration</h2>
      <p>
        Xdraw is built using React and can be integrated into web apps via its library, @excalidraw/excalidraw. It is lightweight, modular, and developer-friendly, making it easy to incorporate into larger systems or adapt for custom projects.
      </p>
      <h2>Enhancements for Xdraw</h2>
      <ul>
        <li>Enhanced Collaboration: Add features like voice/video chat while collaborating.</li>
        <li>AI Assistance: Suggest shapes or layouts based on user input for smarter workflow.</li>
        <li>Extended Export Formats: Include PDF or direct integration with platforms like Google Drive.</li>
        <li>Offline Mode: Provide functionality even without internet access, syncing changes once reconnected.</li>
        <li>Custom Styling Options: Allow users to switch between hand-drawn, clean, or professional styles for diagrams.</li>
      </ul>
      <h2>Getting Started</h2>
      <ol>
        <li>Clone the repository:
          <pre>
            <code>
              git clone https://github.com/githubnext/workspace-blank.git
              cd workspace-blank
            </code>
          </pre>
        </li>
        <li>Install dependencies:
          <pre>
            <code>
              npm install
            </code>
          </pre>
        </li>
        <li>Start the development server:
          <pre>
            <code>
              npm start
            </code>
          </pre>
        </li>
        <li>Open your browser and navigate to <code>http://localhost:3000</code> to see the application in action.</li>
      </ol>
      <h2>Contributing</h2>
      <p>
        We welcome contributions to Xdraw! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request. For major changes, please open an issue first to discuss what you would like to change.
      </p>
      <h2>License</h2>
      <p>
        This project is licensed under the MIT License. See the <a href="/LICENSE">LICENSE</a> file for details.
      </p>
    </div>
  );
};

export default Documentation;
