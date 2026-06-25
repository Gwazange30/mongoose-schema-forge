function App() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Build Database Schema</h1>
        <p className="text-muted-foreground mb-8">
          MongoDB data model using Mongoose with schema validation and environment-based connection.
        </p>

        <div className="space-y-6">
          <section className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">📁 Project Structure</h2>
            <pre className="bg-muted p-4 rounded text-sm overflow-x-auto">{`build-database-schema/
├── package.json          # Dependencies: mongoose, dotenv
├── .env.example          # Template: MONGO_URI=
├── models/
│   └── User.js           # Mongoose schema with validation
└── config/
    └── db.js             # Database connection using process.env.MONGO_URI`}</pre>
          </section>

          <section className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">📋 User Schema Fields</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Field</th>
                  <th className="text-left py-2">Type</th>
                  <th className="text-left py-2">Validation Rules</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b"><td className="py-2 font-mono">username</td><td>String</td><td>required, unique, minlength: 3, maxlength: 30</td></tr>
                <tr className="border-b"><td className="py-2 font-mono">email</td><td>String</td><td>required, unique, lowercase, regex match</td></tr>
                <tr className="border-b"><td className="py-2 font-mono">role</td><td>String</td><td>enum: [student, instructor, admin], default: student</td></tr>
                <tr className="border-b"><td className="py-2 font-mono">age</td><td>Number</td><td>min: 13, max: 120</td></tr>
                <tr className="border-b"><td className="py-2 font-mono">isActive</td><td>Boolean</td><td>default: true</td></tr>
                <tr><td className="py-2 font-mono">createdAt</td><td>Date</td><td>default: Date.now</td></tr>
              </tbody>
            </table>
          </section>

          <section className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3">🔑 Key Features</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Mongoose Schema with mixed validation (required, enum, min/max, minlength/maxlength, unique, default)</li>
              <li>Database connection reads from <code className="bg-muted px-1 rounded">process.env.MONGO_URI</code></li>
              <li>Environment template (<code className="bg-muted px-1 rounded">.env.example</code>) safe to share</li>
              <li>Real <code className="bg-muted px-1 rounded">.env</code> file kept private (gitignored)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
