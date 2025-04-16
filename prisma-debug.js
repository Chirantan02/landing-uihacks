const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

// Check more details about model availability
console.log('store model type:', typeof prisma.store)
console.log('Store model type:', typeof prisma.Store)

// List available models (non-private properties)
const models = Object.keys(prisma).filter(key => !key.startsWith('_') && !key.startsWith('$'))
console.log('Available models:', models)

// Inspect some model methods
if (typeof prisma.store === 'object') {
  console.log('store methods:', Object.keys(prisma.store))
}
if (typeof prisma.Store === 'object') {
  console.log('Store methods:', Object.keys(prisma.Store))
} 