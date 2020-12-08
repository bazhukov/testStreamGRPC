/**
 * @fileoverview gRPC-Web generated client stub for streaming
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.streaming = require('./stream_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.streaming.StreamingClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.streaming.StreamingPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.streaming.StreamingRequest,
 *   !proto.streaming.StreamingResponse>}
 */
const methodDescriptor_Streaming_Stream1 = new grpc.web.MethodDescriptor(
  '/streaming.Streaming/Stream1',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.streaming.StreamingRequest,
  proto.streaming.StreamingResponse,
  /**
   * @param {!proto.streaming.StreamingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.streaming.StreamingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.streaming.StreamingRequest,
 *   !proto.streaming.StreamingResponse>}
 */
const methodInfo_Streaming_Stream1 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.streaming.StreamingResponse,
  /**
   * @param {!proto.streaming.StreamingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.streaming.StreamingResponse.deserializeBinary
);


/**
 * @param {!proto.streaming.StreamingRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.streaming.StreamingResponse>}
 *     The XHR Node Readable Stream
 */
proto.streaming.StreamingClient.prototype.stream1 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/streaming.Streaming/Stream1',
      request,
      metadata || {},
      methodDescriptor_Streaming_Stream1);
};


/**
 * @param {!proto.streaming.StreamingRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.streaming.StreamingResponse>}
 *     The XHR Node Readable Stream
 */
proto.streaming.StreamingPromiseClient.prototype.stream1 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/streaming.Streaming/Stream1',
      request,
      metadata || {},
      methodDescriptor_Streaming_Stream1);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.streaming.StreamingRequest,
 *   !proto.streaming.StreamingResponse>}
 */
const methodDescriptor_Streaming_Stream2 = new grpc.web.MethodDescriptor(
  '/streaming.Streaming/Stream2',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.streaming.StreamingRequest,
  proto.streaming.StreamingResponse,
  /**
   * @param {!proto.streaming.StreamingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.streaming.StreamingResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.streaming.StreamingRequest,
 *   !proto.streaming.StreamingResponse>}
 */
const methodInfo_Streaming_Stream2 = new grpc.web.AbstractClientBase.MethodInfo(
  proto.streaming.StreamingResponse,
  /**
   * @param {!proto.streaming.StreamingRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.streaming.StreamingResponse.deserializeBinary
);


/**
 * @param {!proto.streaming.StreamingRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.streaming.StreamingResponse>}
 *     The XHR Node Readable Stream
 */
proto.streaming.StreamingClient.prototype.stream2 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/streaming.Streaming/Stream2',
      request,
      metadata || {},
      methodDescriptor_Streaming_Stream2);
};


/**
 * @param {!proto.streaming.StreamingRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.streaming.StreamingResponse>}
 *     The XHR Node Readable Stream
 */
proto.streaming.StreamingPromiseClient.prototype.stream2 =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/streaming.Streaming/Stream2',
      request,
      metadata || {},
      methodDescriptor_Streaming_Stream2);
};


module.exports = proto.streaming;

