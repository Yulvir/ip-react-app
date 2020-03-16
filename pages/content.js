import Link from 'next/link'
import React from "react";

export default function Content() {

    return (
            <div className="container-fluid">


            <div className="card-deck mb-3 text-center">
                    <div className="card mb-4 box-shadow">
                        <div className="card-header bg-info">
                            <h4 className="my-0 font-weight-lighter ">What is IP ?</h4>
                        </div>
                        <div className="card-body">

                <p className="mb-0">An Internet Protocol address (IP address) is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.</p>
                <p className="mb-0">
                    An IP address serves two main functions: host or network interface identification and location addressing.
Internet Protocol version 4 (IPv4) defines an IP address as a 32-bit number.

                </p>
                However, because of the growth of the Internet and the depletion of available IPv4 addresses, a new version of IP (IPv6), using 128 bits for the IP address, was standardized in 1998.[3][4][5] IPv6 deployment has been ongoing since the mid-2000s.
IP addresses are written and displayed in human-readable notations, such as 172.16.254.1 in IPv4, and 2001:db8:0:1234:0:567:8:1 in IPv6. The size of the routing prefix of the address is designated in CIDR notation by suffixing the address with the number of significant bits, e.g., 192.168.1.15/24, which is equivalent to the historically used subnet mask 255.255.255.0.
The IP address space is managed globally by the Internet Assigned Numbers Authority (IANA), and by five regional Internet registries (RIRs) responsible in their designated territories for assignment to local Internet registries, such as Internet service providers, and other end users. IPv4 addresses were distributed by IANA to the RIRs in blocks of approximately 16.8 million addresses each, but have been exhausted at the IANA level since 2011. Only one of the RIRs still has a supply for local assignments in Africa.[6] Some IPv4 addresses are reserved for private networks and are not globally unique.
Network administrators assign an IP address to each device connected to a network. Such assignments may be on a static (fixed or permanent) or dynamic basis, depending on network practices and software features.
                <p>
                    <a href="https://en.wikipedia.org/wiki/IP_address">Sources(Wikipedia)</a>

                </p>
                        </div>

                    </div>

            </div>

        </div>

    )
}

