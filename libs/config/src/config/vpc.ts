import { CdkConfig } from '@cdklib/config'
import { z } from 'zod'

/**
 * Schema for VPC configuration
 *
 * Defines the network topology for VPC deployments across environments
 */
const schema = z.object({
    /**
     * Primary CIDR block for the VPC (e.g., '10.0.0.0/16')
     */
    cidr: z.string(),

    /**
     * List of availability zones to deploy resources across
     */
    availabilityZones: z.array(z.string()),

    /**
     * CIDR blocks for private subnets (typically used for internal resources)
     * Each subnet will be created in a corresponding availability zone
     */
    privateSubnets: z.array(z.string()),

    /**
     * CIDR blocks for public subnets (typically used for internet-facing resources)
     * Each subnet will be created in a corresponding availability zone
     */
    publicSubnets: z.array(z.string()),
})

/**
 * VPC configuration for different environments
 */
export const vpcConfig = new CdkConfig(schema)
    .set('dev/staging', {
        cidr: '10.0.0.0/16',
        availabilityZones: ['us-east-1a', 'us-east-1b', 'us-east-1c'],
        privateSubnets: ['10.0.1.0/24', '10.0.2.0/24', '10.0.3.0/24'],
        publicSubnets: ['10.0.101.0/24', '10.0.102.0/24', '10.0.103.0/24'],
    })
    .set('prod/us-central-1', {
        cidr: '10.1.0.0/16',
        availabilityZones: ['us-central-1a', 'us-central-1b', 'us-central-1c'],
        privateSubnets: ['10.1.1.0/24', '10.1.2.0/24', '10.1.3.0/24'],
        publicSubnets: ['10.1.101.0/24', '10.1.102.0/24', '10.1.103.0/24'],
    })
