# n-exception

A TypeScript library providing a comprehensive set of exception classes for robust error handling in applications.

## Overview

n-exception is a TypeScript library that extends the standard JavaScript `Error` class to provide a more structured and type-safe way of handling exceptions in your applications. It includes a base `Exception` class and several specialized exception types for common error scenarios.

## Installation

```bash
npm install @nivinjoseph/n-exception
# or
yarn add @nivinjoseph/n-exception
```

## Features

- Base `Exception` class extending JavaScript's `Error`
- Support for inner exceptions (error chaining)
- Type-safe exception handling
- Comprehensive stack trace support
- Common exception types for various scenarios

## Available Exception Types

- `Exception` - Base exception class
- `ApplicationException` - For application-level errors
- `ArgumentException` - For invalid argument errors
- `ArgumentNullException` - For null argument errors
- `InvalidArgumentException` - For invalid argument values
- `InvalidOperationException` - For invalid operation attempts
- `NotImplementedException` - For unimplemented functionality
- `ObjectDisposedException` - For attempts to use disposed objects

## Usage

### Basic Usage

```typescript
import { Exception, ArgumentNullException } from "@nivinjoseph/n-exception";

// Creating a basic exception
const ex = new Exception("Something went wrong");

// Creating an exception with an inner exception
const innerEx = new Error("Original error");
const exWithInner = new Exception("Operation failed", innerEx);

// Using specialized exceptions
function processUser(user: any) {
    if (!user) {
        throw new ArgumentNullException("user");
    }
    // ... rest of the function
}
```

### Error Chaining

```typescript
try {
    // Some operation that might fail
} catch (error) {
    throw new ApplicationException("Failed to process data", error);
}
```

### Custom Exceptions

You can create your own exception types by extending the base `Exception` class:

```typescript
class CustomException extends Exception {
    constructor(message: string, innerException?: Error) {
        super(message, innerException);
    }
}
```

## API Reference

### Exception Class

The base `Exception` class provides the following properties and methods:

- `name`: The name of the exception type
- `message`: The error message
- `innerException`: The inner exception (if any)
- `stack`: The stack trace

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
