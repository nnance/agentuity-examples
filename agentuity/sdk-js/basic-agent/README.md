# Basic Agent Example

## Overview
This example demonstrates a basic agent implementation using the Agentuity JavaScript SDK. The agent processes JSON requests and returns JSON responses with personalized greetings.

## How It Works
The agent:
1. Receives a JSON request with an optional `name` field
2. Logs the request using the context logger
3. Returns a personalized greeting with a timestamp
4. Includes error handling for invalid requests

## Running Locally
To run this agent locally:

```bash
# Navigate to the agent directory
cd basic-agent

# Install dependencies
npm install

# Run the agent locally
agentuity run
```

## Deployment
To deploy this agent to Agentuity Cloud:

```bash
# Navigate to the agent directory
cd basic-agent

# Deploy the agent
agentuity deploy
```

After deployment, you can access your agent through the Agentuity Cloud dashboard.

## Additional Documentation
For more information about Agentuity and its capabilities, visit [https://agentuity.dev/](https://agentuity.dev/).
